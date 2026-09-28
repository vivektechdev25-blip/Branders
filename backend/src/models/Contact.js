import { getSupabaseClient } from '../config/supabase.js';
import { config } from '../config/env.js';

// Fallback in-memory store ONLY used in non-production development environments
export const inMemoryContacts = [];

/**
 * Standardizes a database record from Supabase PostgreSQL (snake_case)
 * to match existing API expectations.
 */
const formatContactRecord = (record) => {
  if (!record) return null;
  return {
    id: record.id,
    name: record.name,
    company: record.company || '',
    phone: record.phone,
    email: record.email,
    service: record.service,
    message: record.message,
    source: record.source || 'website',
    status: record.status || 'new',
    createdAt: record.created_at || record.createdAt,
    updatedAt: record.updated_at || record.updatedAt,
    created_at: record.created_at || record.createdAt,
    updated_at: record.updated_at || record.updatedAt
  };
};

/**
 * Contact Model & Repository (Supabase PostgreSQL)
 */
export const Contact = {
  /**
   * Insert a new contact inquiry
   */
  async create(contactData) {
    const client = getSupabaseClient();
    const isProduction = config.nodeEnv === 'production';

    if (client) {
      try {
        const payload = {
          name: contactData.name,
          company: contactData.company || '',
          phone: contactData.phone,
          email: contactData.email,
          service: contactData.service,
          message: contactData.message,
          source: contactData.source || 'website',
          status: contactData.status || 'new'
        };

        const { data, error } = await client
          .from('contacts')
          .insert([payload])
          .select()
          .single();

        if (!error && data) {
          return formatContactRecord(data);
        }

        console.error(`[Supabase Contact Error] DB insert issue: ${error?.message}`);
        if (isProduction) {
          throw new Error(`Database error: Failed to record lead in Supabase PostgreSQL (${error?.message})`);
        }
      } catch (err) {
        console.error(`[Supabase Contact Error] (${err.message})`);
        if (isProduction) {
          throw err;
        }
      }
    } else if (isProduction) {
      console.error('[Supabase Contact Error] Supabase credentials not set in production!');
      throw new Error('Database service is not configured in production environment.');
    }

    // In-memory fallback ONLY in non-production development
    console.warn('[Supabase Fallback] Saving to in-memory store (development only).');
    const fallbackRecord = {
      id: 'mem_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: contactData.name,
      company: contactData.company || '',
      phone: contactData.phone,
      email: contactData.email,
      service: contactData.service,
      message: contactData.message,
      source: contactData.source || 'website',
      status: contactData.status || 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    inMemoryContacts.unshift(fallbackRecord);
    return fallbackRecord;
  },

  /**
   * Retrieve recent inquiries
   */
  async find({ limit = 50 } = {}) {
    const client = getSupabaseClient();
    const isProduction = config.nodeEnv === 'production';

    if (client) {
      try {
        const { data, error } = await client
          .from('contacts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (!error && Array.isArray(data)) {
          return data.map(formatContactRecord);
        }

        console.error(`[Supabase Contact Error] DB read issue: ${error?.message}`);
        if (isProduction) {
          throw new Error(`Database error: Failed to query leads from Supabase PostgreSQL (${error?.message})`);
        }
      } catch (err) {
        console.error(`[Supabase Contact Error] (${err.message})`);
        if (isProduction) {
          throw err;
        }
      }
    } else if (isProduction) {
      console.error('[Supabase Contact Error] Supabase credentials not set in production!');
      throw new Error('Database service is not configured in production environment.');
    }

    return inMemoryContacts.slice(0, limit);
  }
};
