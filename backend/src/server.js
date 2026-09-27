import app from './app.js';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';

const startServer = async () => {
  // Connect to DB asynchronously
  await connectDB();

  const server = app.listen(config.port, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Branderss Backend Server Running`);
    console.log(`📡 URL: http://localhost:${config.port}`);
    console.log(`🩺 Health: http://localhost:${config.port}/api/health`);
    console.log(`💼 Environment: ${config.nodeEnv}`);
    console.log(`======================================================\n`);
  });

  // Graceful shutdown
  const handleExit = (signal) => {
    console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
      console.log('[Server] Process terminated.');
      process.exit(0);
    });
  };

  process.on('SIGINT', () => handleExit('SIGINT'));
  process.on('SIGTERM', () => handleExit('SIGTERM'));
};

startServer();
