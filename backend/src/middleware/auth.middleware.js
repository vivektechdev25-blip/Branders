import { config } from '../config/env.js';

/**
 * Admin Authentication Middleware
 * Protects sensitive endpoints (e.g. retrieving stored customer inquiries).
 * Requires an API key via `x-admin-key` header or `Authorization: Bearer <key>`.
 */
export const requireAdminAuth = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];
  const authHeader = req.headers['authorization'];

  let token = null;
  if (adminKey) {
    token = adminKey;
  } else if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token || token !== config.adminApiKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Admin credentials required to access this resource.'
    });
  }

  next();
};
