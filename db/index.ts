import { PrismaClient } from '@/lib/generated/prisma'

const here = globalThis as unknown as {
  db?: PrismaClient;
};

export const db = here.db || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  here.db = db;
}
