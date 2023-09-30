import pino from 'pino';

export const pinoLogger = pino({
  name: 'blog-service',
  level: process.env.LOG_LEVEL || 'debug',
});
