import { Router } from 'express';
import contactRoutes from './contact.routes.js';
import { getDBStatus } from '../config/db.js';

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    brand: 'Branderss',
    tagline: 'Make it bold, make it Branderss',
    timestamp: new Date().toISOString(),
    database: getDBStatus()
  });
});

// Verified Branderss services list
router.get('/services', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 'branding', title: 'Branding', category: 'Identity & Strategy' },
      { id: 'social-media', title: 'Social Media Marketing', category: 'Growth & Content' },
      { id: 'seo', title: 'Search Engine Optimization (SEO)', category: 'Organic Visibility' },
      { id: 'web-development', title: 'Web Development', category: 'Digital Experiences' },
      { id: 'performance-ads', title: 'Advertising / Performance Ads', category: 'Paid Acquisition' },
      { id: 'graphic-design', title: 'Graphic Design', category: 'Visual Assets' },
      { id: 'whatsapp-automation', title: 'WhatsApp Automation', category: 'Workflow & Retention' },
      { id: 'ad-services', title: 'Ad Services & Media Planning', category: 'Strategic Placement' }
    ]
  });
});

// Contact endpoint
router.use('/contact', contactRoutes);

export default router;
