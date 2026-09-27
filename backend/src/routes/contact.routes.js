import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller.js';
import { validateContactInput } from '../middleware/validation.middleware.js';
import { contactRateLimiter } from '../middleware/rateLimiter.middleware.js';
import { requireAdminAuth } from '../middleware/auth.middleware.js';

const router = Router();

// Public lead submission: Protected by rate limiting (max 5/15min) + strict input validation & honeypot
router.post('/', contactRateLimiter, validateContactInput, submitContact);

// Private lead retrieval: Protected by admin authentication API key
router.get('/', requireAdminAuth, getContacts);

export default router;
