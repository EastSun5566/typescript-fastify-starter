import { createApp } from './app';

async function main() {
  const app = createApp({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  });

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

main();
