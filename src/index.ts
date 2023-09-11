import 'module-alias/register';
import 'reflect-metadata';
import './infrastructure/ioc';
import server from './server';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from '@routers/PostRouter';
import userRouter from '@routers/UserRouter';
import prisma from './infrastructure/database';

dotenv.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';

(async () => {
  server.get('/', (req, res) => {
    res.send('Hello Blog Service');
  });

  server.use(
    cors({
      origin: [`${HOST}:${PORT}`],
    })
  );
  server.use('/api/posts', postRouter);
  server.use('/api/users', userRouter);
  server.use((req, res) => {
    res.status(404);
  });

  server.listen(PORT, () => {
    console.log(`Server working on ${HOST}:${PORT}`);
  });
})()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
