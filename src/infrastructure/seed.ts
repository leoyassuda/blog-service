import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const postsData: Prisma.PostCreateInput[] = [
  {
    text: 'Text test AAA',
    author: {
      create: {
        name: 'Omar',
        nickname: 'Dogomar',
      },
    },
  },
  {
    text: 'Text test rouf rouf rouf',
    author: {
      create: {
        name: 'Guilherme',
        nickname: 'DoGui',
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const post of postsData) {
    const postCreated = await prisma.post.create({
      data: post,
    });
    console.log(`Created post with id: ${postCreated.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
