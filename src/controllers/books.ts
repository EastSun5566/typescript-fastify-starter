import type { FastifyReply, FastifyRequest } from 'fastify';

import type { BookService } from '../services';
import type {
  CreateBookDTO,
  UpdateBookDTO,
} from '../entities';

export class BookController {
  constructor(
    private readonly bookService: InstanceType<typeof BookService>,
  ) {}

  index = async (request: FastifyRequest, reply: FastifyReply) => {
    const books = await this.bookService.find();

    return reply.send(books);
  };

  show = async (request: FastifyRequest<{ Params: { bookId: number } }>, reply: FastifyReply) => {
    const { params } = request;
    if (!params.bookId) {
      return reply.badRequest();
    }

    const book = await this.bookService.findByID(params.bookId);

    return reply.send(book);
  };

  update = (
    request: FastifyRequest<{ Params: { bookId: number }, Body: UpdateBookDTO }>,
    reply: FastifyReply,
  ) => {
    const { params, body } = request;
    if (!params.bookId || !body) {
      return reply.badRequest();
    }

    const book = this.bookService.update(params.bookId, body);

    return reply.send(book);
  };

  store = async (request: FastifyRequest<{ Body: CreateBookDTO }>, reply: FastifyReply) => {
    const { body } = request;
    if (!body) {
      return reply.badRequest();
    }

    const book = await this.bookService.create(body);

    return reply.send(book);
  };
}

export default BookController;
