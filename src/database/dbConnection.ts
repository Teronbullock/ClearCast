import mongoose from 'mongoose';

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Tells TypeScript that the `global` object will have a new property named `mongoose` at runtime.
declare global {
  var mongoose: CachedConnection | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your environment variables');
}

// Defines a set of configuration options for the MongoDB connection.
const mongooseOptions = {
  dbName: process.env.MONGODB_DB_NAME || 'myDB',
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  bufferCommands: false,
};

export async function dbConnect(): Promise<typeof mongoose> {
  // Step 1: Initialize cache if it doesn't exist
  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
  }

  // Step 2: Return existing connection if healthy
  if (global.mongoose.conn?.connection?.readyState === 1) {
    console.log('♻️ Using cached MongoDB connection');
    return global.mongoose.conn;
  }

  // Step 3: Clean up dead connections
  if (global.mongoose.conn?.connection?.readyState !== 2) {
    // Not connecting, so clear everything
    global.mongoose.conn = null;
    global.mongoose.promise = null;
  }

  // Step 4: Create new connection promise if needed
  if (!global.mongoose.promise && MONGODB_URI) {
    console.log('🔄 Creating new MongoDB connection');
    global.mongoose.promise = mongoose.connect(MONGODB_URI, mongooseOptions);
  }

  try {
    // Step 5: Wait for connection and cache it
    global.mongoose.conn = await global.mongoose.promise;
    console.log('✅ MongoDB connected successfully');
    return global.mongoose.conn;
  } catch (error) {
    // Step 6: Clean up on failure
    global.mongoose.promise = null;
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
}
