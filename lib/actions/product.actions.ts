'use server'

import { PrismaClient, Product } from '@/lib/generated/prisma'

const db = new PrismaClient();

export async function getLatestProducts(): Promise<Product[]> {
  return db.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  });
}

export async function getProductBySlug(slug: string) {
  return db.product.findFirstOrThrow({
    where: {
      slug
    },
    
  });
}