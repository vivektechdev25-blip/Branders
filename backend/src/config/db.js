import mongoose from 'mongoose';
import { config } from './env.js';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.warn(`[Database Warning] MongoDB connection failed (${error.message}).`);
    console.warn(`[Database Notice] Operating in resilient fallback mode (in-memory persistence active).`);
  }
};

export const getDBStatus = () => ({
  connected: isConnected,
  database: isConnected ? mongoose.connection.name : 'fallback-in-memory'
});
