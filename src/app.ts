import createFastifyApp from 'fastify';

import { sensiblePlugin } from './plugins';
import {
  homeRoute,
  bookRoute,
} from './routes';

export function createApp(options = {}) {
  const app = createFastifyApp(options);

  app.register(sensiblePlugin);

  const PATH_PREFIX = 'api';
  app.register(homeRoute);
  app.register(bookRoute, { prefix: PATH_PREFIX });

  return app;
}

export default createApp;
