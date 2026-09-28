import { testSupabaseConnection, isSupabaseConfigured } from './supabase.js';
import { config } from './env.js';

let dbStatus = {
  connected: false,
  provider: 'supabase-postgresql',
  projectRef: 'amoigwxxcdoypninyhes',
  mode: 'unconnected',
  tableReady: false
};

export const connectDB = async () => {
  const isProduction = config.nodeEnv === 'production';

  if (!isSupabaseConfigured()) {
    if (isProduction) {
      dbStatus.mode = 'unconfigured-error';
      console.error('\n❌ [CRITICAL DATABASE ERROR] Supabase environment variables are missing in production!');
      console.error('❌ Please configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your Render dashboard environment variables.');
      console.error('❌ In-memory fallback is strictly disabled in production.\n');
    } else {
      dbStatus.mode = 'fallback-in-memory';
      console.warn('[Database Notice] Supabase credentials not set. Operating in resilient fallback mode (development only).');
    }
    return;
  }

  try {
    const result = await testSupabaseConnection();
    if (result.connected) {
      dbStatus.connected = true;
      dbStatus.mode = 'supabase-live';
      dbStatus.tableReady = result.tableReady !== false;
      console.log(`[Database] Supabase PostgreSQL Connected: amoigwxxcdoypninyhes`);
      if (result.tableReady === false) {
        console.warn(`[Database Notice] 'contacts' table is not yet created in Supabase. Run supabase-schema.sql in the Supabase SQL Editor.`);
      }
    } else {
      dbStatus.connected = false;
      dbStatus.mode = isProduction ? 'connection-error' : 'fallback-in-memory';
      console.error(`[Database Error] Supabase connection failed: ${result.error || result.reason}`);
      if (!isProduction) {
        console.warn(`[Database Notice] Operating in resilient fallback mode (development only).`);
      }
    }
  } catch (error) {
    dbStatus.connected = false;
    dbStatus.mode = isProduction ? 'connection-error' : 'fallback-in-memory';
    console.error(`[Database Error] Supabase connection exception: ${error.message}`);
    if (!isProduction) {
      console.warn(`[Database Notice] Operating in resilient fallback mode (development only).`);
    }
  }
};

export const getDBStatus = () => ({
  ...dbStatus
});
