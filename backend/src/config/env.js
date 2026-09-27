import dotenv from 'dotenv';
dotenv.config();

const defaultAllowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

const parseCorsOrigins = (raw) => {
  if (!raw || raw === '*') {
    // In production, do not default to wildcard
    return process.env.NODE_ENV === 'production' ? [] : defaultAllowedOrigins;
  }
  return raw
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
};

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/branderss',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000,http://127.0.0.1:3000',
  allowedOrigins: parseCorsOrigins(process.env.CORS_ORIGIN),
  adminApiKey: process.env.ADMIN_API_KEY || 'branderss-admin-dev-secret-key',
  trustProxy: process.env.TRUST_PROXY
    ? isNaN(Number(process.env.TRUST_PROXY))
      ? process.env.TRUST_PROXY === 'true'
      : Number(process.env.TRUST_PROXY)
    : process.env.NODE_ENV === 'production'
    ? 1
    : false
};
