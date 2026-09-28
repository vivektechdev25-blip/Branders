import { createClient } from '@supabase/supabase-js';
import { config } from './env.js';

let supabaseClient = null;

export const isSupabaseConfigured = () => {
  return Boolean(config.supabaseUrl && config.supabaseKey && config.supabaseKey !== 'your_supabase_service_role_key_here');
};

/**
 * Initializes and exports the Supabase client
 * Uses the Service Role Key for server-to-database backend operations
 */
export const getSupabaseClient = () => {
  if (supabaseClient) return supabaseClient;

  if (!isSupabaseConfigured()) {
    console.warn('[Supabase Warning] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    console.warn('[Supabase Notice] Operating in resilient fallback mode (in-memory persistence active).');
    return null;
  }

  try {
    supabaseClient = createClient(config.supabaseUrl, config.supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    return supabaseClient;
  } catch (err) {
    console.error('[Supabase Error] Failed to initialize Supabase client:', err.message);
    return null;
  }
};

/**
 * Tests live connectivity to the Supabase PostgreSQL database
 */
export const testSupabaseConnection = async () => {
  const client = getSupabaseClient();
  if (!client) {
    return {
      connected: false,
      reason: 'unconfigured'
    };
  }

  try {
    // Attempt lightweight ping to contacts table
    const { error } = await client
      .from('contacts')
      .select('id', { head: true, count: 'exact' });

    if (error) {
      // If table doesn't exist yet, connection to Supabase itself succeeded
      if (error.code === '42P01') {
        return {
          connected: true,
          tableReady: false,
          message: "Connected to Supabase, but 'contacts' table is not yet created. Run supabase-schema.sql."
        };
      }
      return {
        connected: false,
        error: error.message
      };
    }

    return {
      connected: true,
      tableReady: true
    };
  } catch (err) {
    return {
      connected: false,
      error: err.message
    };
  }
};
