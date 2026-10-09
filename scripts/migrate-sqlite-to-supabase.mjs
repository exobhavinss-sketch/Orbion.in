import Database from 'better-sqlite3';
import { prisma } from '../src/lib/prisma.ts';

/**
 * Safe User Data Migration Script: SQLite (dev.db) -> Supabase PostgreSQL
 * Preserves user records, encrypted password hashes, and Better Auth credentials.
 */
async function migrateData() {
  console.log('--- Starting Data Migration from SQLite to Supabase PostgreSQL ---');
  
  const sqliteDb = new Database('./prisma/dev.db', { readonly: true });
  
  const users = sqliteDb.prepare('SELECT * FROM User').all();
  console.log(`Found ${users.length} users in SQLite.`);

  const accounts = sqliteDb.prepare('SELECT * FROM Account').all();
  console.log(`Found ${accounts.length} accounts in SQLite.`);

  for (const user of users) {
    console.log(`Migrating user: ${user.email} (${user.id})...`);
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        name: user.name,
        email: user.email,
        emailVerified: Boolean(user.emailVerified),
        image: user.image,
      },
      create: {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: Boolean(user.emailVerified),
        image: user.image,
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt),
      },
    });
  }

  for (const account of accounts) {
    console.log(`Migrating account: ${account.providerId} (${account.id}) for user ${account.userId}...`);
    await prisma.account.upsert({
      where: { id: account.id },
      update: {
        password: account.password,
        accessToken: account.accessToken,
        refreshToken: account.refreshToken,
      },
      create: {
        id: account.id,
        accountId: account.accountId,
        providerId: account.providerId,
        userId: account.userId,
        accessToken: account.accessToken,
        refreshToken: account.refreshToken,
        idToken: account.idToken,
        scope: account.scope,
        password: account.password,
        createdAt: new Date(account.createdAt),
        updatedAt: new Date(account.updatedAt),
      },
    });
  }

  sqliteDb.close();
  console.log('--- Data Migration Completed Successfully! ---');
}

migrateData()
  .catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
