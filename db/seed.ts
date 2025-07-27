import sampleData from '@/db/sample-data';
import { PrismaClient } from '@/lib/generated/prisma';

async function main() {
  const client = new PrismaClient();

  const entities: { deleteMany(): Promise<unknown>; }[] = [
    client.product,
    client.session,
    client.account,
    client.user,
    client.verificationToken
  ];

  for (const entity of entities) {
    await entity.deleteMany();
  }

  const products = await client.product.createMany({ data: sampleData.products });

  console.log(`Created ${products.count} products!`);

  const users = await client.user.createMany({ data: sampleData.users });

  console.log(`Created ${users.count} users!`);
}

main();