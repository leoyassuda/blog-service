import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const postsData: Prisma.PostCreateInput[] = [
  {
    text: ' Latidos animados para começar o dia! 🌞 Estou pronto para explorar o quintal, farejar algumas coisas interessantes e, claro, correr atrás da minha própria cauda. #VidaDeCachorro #ManhãAnimada',
    user: {
      create: {
        name: 'Dogomar',
        nickname: 'Dogomar',
      },
    },
  },
  {
    text: 'Humano me alimentou com um delicioso petisco hoje! 🍖 Agora, estou deitado ao sol, digerindo e planejando a soneca da tarde. #AlmoçoDoCachorro #VidaBoa',
    user: {
      create: {
        name: 'Dogui',
        nickname: 'Dogui',
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
