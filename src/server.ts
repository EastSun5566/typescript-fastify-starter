import createApp from 'fastify';

import { sensiblePlugin } from './plugins';
import {
  homeRoute,
  bookRoute,
} from './routes';

export async function createServer() {
  const app = createApp({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  });

  app.register(sensiblePlugin);

  const PATH_PREFIX = 'api';
  app.register(homeRoute);
  app.register(bookRoute, { prefix: PATH_PREFIX });

  // Run the server!
  try {
    await app.listen({
      host: process.env.HOST || 'localhost',
      port: +(process.env.PORT || 8080),
    });
  } catch (error: unknown) {
    app.log.error(error);
    process.exit(1);
  }
}

export default createServer;
