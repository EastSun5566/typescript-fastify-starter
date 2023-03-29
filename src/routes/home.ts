import type { FastifyPluginAsync } from 'fastify';
import { homeController } from '../controllers';

export const homeRoute: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/', homeController.index);
};

export default homeRoute;
