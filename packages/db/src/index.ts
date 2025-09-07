/**
 * Database package entry point
 * Exports Prisma client and database utilities
 */

import { PrismaClient } from '@prisma/client';

/**
 * Global Prisma client instance with connection pooling
 * Prevents multiple instances in development hot reload
 */
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

/**
 * Creates and configures Prisma client instance
 * @returns {PrismaClient} Configured Prisma client
 */
export const prisma =
  globalThis.__prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
  });

// In development, store the client globally to prevent hot reload issues
if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

/**
 * Gracefully disconnect from database
 * Should be called when application shuts down
 */
export const disconnectDb = async (): Promise<void> => {
  await prisma.$disconnect();
};

/**
 * Check database connection health
 * @returns {Promise<boolean>} True if database is connected
 */
export const checkDatabaseConnection = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
};

// Export all Prisma types for use across the application
export * from '@prisma/client';
export type { Prisma } from '@prisma/client';