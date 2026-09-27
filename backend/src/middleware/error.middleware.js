import { config } from '../config/env.js';

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' not found.`
  });
};

export const errorHandler = (err, req, res, next) => {
  // 1. Malformed JSON Body Check (e.g. invalid JSON sent in POST request)
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'Malformed JSON payload. Please send valid JSON data.'
    });
  }

  // 2. Payload Too Large (e.g. body exceeding configured limits)
  if (err.type === 'entity.too.large' || err.status === 413) {
    return res.status(413).json({
      success: false,
      message: 'Payload too large. Request body exceeds the maximum permitted size.'
    });
  }

  // Server-side diagnostic log (without logging sensitive user secrets)
  console.error(`[API Error ${new Date().toISOString()}] ${req.method} ${req.originalUrl} — ${err.message}`);
  if (config.nodeEnv !== 'production' && err.stack) {
    console.error(err.stack);
  }

  const statusCode = err.statusCode || (err.status >= 400 && err.status < 600 ? err.status : 500);

  // In production, mask internal server error details to prevent reconnaissance
  const isProduction = config.nodeEnv === 'production';
  const clientMessage =
    statusCode >= 500 && isProduction
      ? 'An unexpected server error occurred. Please try again later.'
      : err.message || 'An unexpected server error occurred.';

  res.status(statusCode).json({
    success: false,
    message: clientMessage,
    errors: err.errors || null
  });
};
