import { Contact } from '../models/Contact.js';

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
      source: 'website',
      status: 'new'
    };

    const savedLead = await Contact.create(contactData);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received by Branderss. We will get back to you shortly.',
      data: {
        id: savedLead.id,
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
    const leads = await Contact.find({ limit: 50 });

    return res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    next(error);
  }
};
