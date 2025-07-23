import sampleData from '@/db/sample-data';
import { PrismaClient } from '@/lib/generated/prisma';

async function main() {
  const client = new PrismaClient();

  await client.product.deleteMany();

  const result = await client.product.createMany({ data: sampleData.products });

  console.log(`Created ${result.count} products!`);
}

main();