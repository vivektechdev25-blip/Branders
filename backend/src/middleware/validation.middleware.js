/**
 * Basic XSS & HTML tag stripper for text fields
 */
const sanitizeText = (val) => {
  if (typeof val !== 'string') return '';
  return val
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
};

/**
 * Validates and sanitizes contact inquiry form submissions.
 * Rejects spam submissions, malformed inputs, oversized payloads, and bot requests.
 */
export const validateContactInput = (req, res, next) => {
  const body = req.body || {};

  // 1. Anti-Bot Honeypot Protection
  // If automated bots fill hidden honeypot fields, block immediately
  const honeypot = body._gotcha || body.hp_website || body.website_url || body._hp;
  if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Spam submission detected.'
    });
  }

  // 2. Prototype Pollution & Parameter Injection Guard
  delete body.__proto__;
  delete body.constructor;
  delete body.prototype;

  const { name, company, phone, email, service, message } = body;
  const errors = {};

  // 3. Name Validation (min 2, max 100 chars)
  const cleanName = sanitizeText(name);
  if (!cleanName) {
    errors.name = 'Full name is required';
  } else if (cleanName.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  } else if (cleanName.length > 100) {
    errors.name = 'Name cannot exceed 100 characters';
  }

  // 4. Company Validation (optional, max 120 chars)
  const cleanCompany = sanitizeText(company);
  if (cleanCompany.length > 120) {
    errors.company = 'Company name cannot exceed 120 characters';
  }

  // 5. Email Validation (RFC 5322 compliant regex, max 150 chars)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  const cleanEmail = (email || '').toString().trim().toLowerCase();
  if (!cleanEmail) {
    errors.email = 'Email address is required';
  } else if (cleanEmail.length > 150) {
    errors.email = 'Email address cannot exceed 150 characters';
  } else if (!emailRegex.test(cleanEmail)) {
    errors.email = 'Please provide a valid email address';
  }

  // 6. Phone Validation (min 8 digits, max 25 chars, valid phone chars)
  const rawPhone = (phone || '').toString().trim();
  const phoneDigits = rawPhone.replace(/[\s\-\(\)\+\.]/g, '');
  if (!rawPhone || !phoneDigits) {
    errors.phone = 'Phone number is required';
  } else if (phoneDigits.length < 8) {
    errors.phone = 'Please provide a valid phone number (at least 8 digits)';
  } else if (phoneDigits.length > 15 || rawPhone.length > 25) {
    errors.phone = 'Phone number cannot exceed 25 characters';
  } else if (!/^[0-9+\s\-().]{8,25}$/.test(rawPhone)) {
    errors.phone = 'Phone number contains invalid characters';
  }

  // 7. Service Selection (required, max 100 chars)
  const cleanService = sanitizeText(service);
  if (!cleanService) {
    errors.service = 'Please select a primary service of interest';
  } else if (cleanService.length > 100) {
    errors.service = 'Service name cannot exceed 100 characters';
  }

  // 8. Message Validation (min 10, max 2000 chars)
  const cleanMessage = sanitizeText(message);
  if (!cleanMessage) {
    errors.message = 'Please provide a brief message about your project';
  } else if (cleanMessage.length < 10) {
    errors.message = 'Project message must be at least 10 characters long';
  } else if (cleanMessage.length > 2000) {
    errors.message = 'Project message cannot exceed 2000 characters';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please review your input.',
      errors
    });
  }

  // Bind sanitized values to req.body for controller consumption
  req.body.name = cleanName;
  req.body.company = cleanCompany;
  req.body.email = cleanEmail;
  req.body.phone = rawPhone;
  req.body.service = cleanService;
  req.body.message = cleanMessage;

  next();
};
