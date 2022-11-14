// import type { BookEntity } from '../entities';
// import { BookRepo } from '../repos';

export class BookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private bookRepos: InstanceType<any>,
  ) {}

  find(): Promise<any[]> {
    return this.bookRepos.find();
  }

  findByID(id: any['id']): Promise<any> {
    return this.bookRepos.findByID(id);
  }

  create(book: Omit<any, 'id'>): Promise<any> {
    return this.bookRepos.create(book);
  }
}

export default BookService;
