// import type { BookEntity } from '../entities';
// import { BookRepo } from '../repos';

export class BookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private bookRepos: InstanceType<any>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  find(): Promise<any[]> {
    return this.bookRepos.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  findByID(id: any['id']): Promise<any> {
    return this.bookRepos.findByID(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create(book: Omit<any, 'id'>): Promise<any> {
    return this.bookRepos.create(book);
  }
}

export default BookService;
