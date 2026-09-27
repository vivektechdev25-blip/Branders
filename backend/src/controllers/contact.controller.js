import { Contact, inMemoryContacts } from '../models/Contact.js';
import mongoose from 'mongoose';

export const submitContact = async (req, res, next) => {
  try {
    const { name, company, phone, email, service, message } = req.body;

    const contactData = {
      name: name.trim(),
      company: (company || '').trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      service: service.trim(),
      message: message.trim(),
      status: 'new',
      createdAt: new Date()
    };

    let savedLead;

    // Check if MongoDB connection is open
    if (mongoose.connection.readyState === 1) {
      savedLead = await Contact.create(contactData);
    } else {
      // In-memory store fallback
      contactData._id = 'mem_' + Date.now();
      inMemoryContacts.unshift(contactData);
      savedLead = contactData;
      console.log('[Notice] Lead saved to in-memory fallback store:', contactData.email);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received by Branderss. We will get back to you shortly.',
      data: {
        id: savedLead._id,
        name: savedLead.name,
        service: savedLead.service,
        createdAt: savedLead.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    let leads = [];
    if (mongoose.connection.readyState === 1) {
      leads = await Contact.find().sort({ createdAt: -1 }).limit(50);
    } else {
      leads = inMemoryContacts.slice(0, 50);
    }

    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    next(error);
  }
};
