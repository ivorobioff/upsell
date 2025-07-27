'use server'

import { db } from '@/db';
import { Product } from '@/lib/generated/prisma'


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