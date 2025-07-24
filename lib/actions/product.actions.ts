'use server'

import { PrismaClient, Product } from '@/lib/generated/prisma'

const here = globalThis as unknown as {
  db?: PrismaClient;
};

const db = here.db || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  here.db = db;
}

export async function getLatestProducts(): Promise<Product[]> {
  return db.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  });
}

export async function getProductBySlug(slug: string) {
  return db.product.findFirst({
    where: {
      slug
    },

  });
}