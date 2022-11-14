import type { RouteShorthandOptionsWithHandler } from 'fastify';

import type { BookService } from '../services';

type GetBookDTO = {
  id?: number;
};

type CreateBookDTO = {
  name: string;
};

interface IBookController {
  index: RouteShorthandOptionsWithHandler['handler'];
  show: RouteShorthandOptionsWithHandler['handler'];
  store: RouteShorthandOptionsWithHandler['handler'];
}

export class BookController implements IBookController {
  constructor(
    private readonly bookService: InstanceType<typeof BookService>,
  ) {}

  index() {
    return this.bookService.find();
  }

  show(request) {
    const { params }: { params: GetBookDTO } = request;
    if (!params.id) {
      throw new Error();
    }

    return this.bookService.findByID(params.id);
  }

  async store(request) {
    const { body }: { body?: CreateBookDTO } = request;
    if (!body) {
      throw new Error();
    }

    return this.bookService.create(body);
  }
}

export default BookController;
