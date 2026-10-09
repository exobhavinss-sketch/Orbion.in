import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim().length > 0);
}

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL environment variable is not defined. Please configure Supabase PostgreSQL in your environment.'
    );
  }
  const adapter = new PrismaPg({
    connectionString,
  });
  return new PrismaClient({ adapter });
}

export function getPrisma(): PrismaClient | null {
  if (!isDatabaseConfigured()) {
    return null;
  }
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

// Lazy Proxy export to prevent build-time crashes when DATABASE_URL is not set
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrisma();
    if (!client) {
      throw new Error(
        'DATABASE_URL environment variable is not defined. Please configure Supabase PostgreSQL in your environment.'
      );
    }
    const value = (client as any)[prop];
    return typeof value === 'function' ? value.bind(client) : value;
  },
});
