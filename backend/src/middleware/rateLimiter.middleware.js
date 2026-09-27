import rateLimit from 'express-rate-limit';

/**
 * Standardized 429 response handler that does not leak internal implementation details
 */
const rateLimitHandler = (req, res) => {
  return res.status(429).json({
    success: false,
    message: 'Too many requests. Please try again later.'
  });
};

/**
 * Contact/Lead API Rate Limiter
 * Limits contact and inquiry form submissions to a maximum of 5 requests per IP per 15 minutes.
 * Prevents spam bots, lead flooding, and automated submission attacks.
 */
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per window
  standardHeaders: true, // Return standard `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: rateLimitHandler,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});

/**
 * General Public API Rate Limiter
 * Protects public endpoints (health check, services, root) from abuse and DoS.
 * Maximum 100 requests per IP per 15 minutes.
 */
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});
