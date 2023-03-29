import type { FastifyPluginAsync } from 'fastify';
import { bookController } from '../controllers';

export const bookRoute: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/books', bookController.index);
  app.get('/books/:bookId', bookController.show);
  app.patch('/books/:bookId', bookController.update);
  app.post('/books', bookController.store);
};

export default bookRoute;
