import 'module-alias/register';
import 'reflect-metadata';
import './infrastructure/ioc';
import server from './server';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from '@routers/PostRouter';
import userRouter from '@routers/UserRouter';
import prisma from './infrastructure/database';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import logger from 'pino-http';
// import { pinoLogger } from './utils/Logger';

dotenv.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'http://localhost';
logger({
  name: 'blog-service',
  level: process.env.LOG_LEVEL || 'debug',
  autoLogging: true,
});

const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Blog Service API with Swagger',
      version: '1.0.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: `${HOST}:${PORT}`,
      },
    ],
  },
  // apis: ['./routes/*.ts'],
  apis: [`${__dirname}/routes/*.ts`, '../dist/routes/*.js'],
};

(async () => {
  server.get('/', (req, res) => {
    res.send('Hello Blog Service');
  });

  server.use(
    cors({
      origin: [`${HOST}:${PORT}`],
    })
  );
  server.use(logger);
  server.use('/api/posts', postRouter);
  server.use('/api/users', userRouter);
  server.use((req, res) => {
    res.status(404);
  });
  const swaggerSpecs = swaggerJSDoc(swaggerOptions);
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

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
