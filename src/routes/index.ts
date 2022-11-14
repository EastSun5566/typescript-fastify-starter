import type { FastifyPluginAsync } from 'fastify';
import { homeController } from '../controllers';

const home: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/', async () => homeController.index());
};

export default home;
