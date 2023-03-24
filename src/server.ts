import { join } from 'node:path';
import AutoLoad from '@fastify/autoload';
import createApp from 'fastify';

export async function createServer() {
  const app = createApp({
    logger: true,
  });

  app.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
  });

  app.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
  });

  // Run the server!
  try {
    await app.listen({ port: 3000 });
  } catch (error: unknown) {
    app.log.error(error);
    process.exit(1);
  }
}

export default createServer;
