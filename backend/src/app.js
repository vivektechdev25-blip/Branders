import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env.js';
import apiRoutes from './routes/api.routes.js';
import { apiRateLimiter } from './middleware/rateLimiter.middleware.js';
import { notFoundHandler, errorHandler } from './middleware/error.middleware.js';

const app = express();

// 1. Configure Trust Proxy for safe IP detection behind reverse proxies/tunnels
if (config.trustProxy !== false) {
  app.set('trust proxy', config.trustProxy);
}

// 2. Production Security Headers with Helmet
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    frameguard: { action: 'deny' },
    noSniff: true,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    hsts:
      config.nodeEnv === 'production'
        ? { maxAge: 31536000, includeSubDomains: true, preload: true }
        : false
  })
);

// 3. Strict CORS Origin Validation
const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (e.g. mobile apps, curl, server-to-server) without origin
    if (!origin) return callback(null, true);

    const isExplicitlyAllowed = config.allowedOrigins.includes(origin);
    const isNgrok =
      origin.endsWith('.ngrok-free.app') ||
      origin.endsWith('.ngrok.app') ||
      origin.endsWith('.ngrok.io');
    const isLocalhost =
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:');

    if (isExplicitlyAllowed || isNgrok || (config.nodeEnv !== 'production' && isLocalhost)) {
      return callback(null, true);
    }

    const corsError = new Error(`Origin '${origin}' not allowed by CORS policy.`);
    corsError.statusCode = 403;
    return callback(corsError);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-key']
};

app.use(cors(corsOptions));

// 4. Safe Payload Size Limits to prevent DoS / Memory exhaustion
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// 5. Development Request Logging
if (config.nodeEnv !== 'production') {
  app.use(morgan('dev'));
}

// 6. Global API Rate Limiter (Max 100 requests per IP per 15 minutes)
app.use('/api', apiRateLimiter);

// 7. Mount API Routes
app.use('/api', apiRoutes);

// 8. Root Greeting
app.get('/', (req, res) => {
  res.json({
    brand: 'Branderss',
    message: 'Welcome to Branderss API — We create stories around brands.',
    docs: '/api/health'
  });
});

// 9. Centralized 404 and Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
