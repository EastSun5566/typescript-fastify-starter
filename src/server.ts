import { join } from 'node:path';
import AutoLoad from '@fastify/autoload';
import createApp from 'fastify';

export async function createServer() {
  const app = createApp({
    logger: true,
  });

  app.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    // Options: opts
  });

  app.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    // Options: opts
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
