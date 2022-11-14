import { join } from 'node:path';
import AutoLoad from '@fastify/autoload';
import createApp from 'fastify';

export async function createServer() {
  const app = createApp({
    logger: true
  });

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void app.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    // options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void app.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    // options: opts
  })

  // Run the server!
  try {
    const address = await app.listen({ port: 3000 })
    app.log.info(`Server is now listening on ${address}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}