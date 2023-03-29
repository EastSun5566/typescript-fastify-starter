import type {
  BookEntity,
  UpdateBookDTO,
  CreateBookDTO,
} from '../entities';

export class BookService {
  constructor(
    private readonly bookRepos: BookEntity[] = [],
  ) {}

  find = () => this.bookRepos;

  findByID = (id: number) => this.bookRepos.find((book) => book.id === id);

  update = (id: number, updateBookDTO: UpdateBookDTO) => {
    const index = this.bookRepos.findIndex((book) => book.id === id);
    if (index === -1) return undefined;

    const book = { ...this.bookRepos[index], ...updateBookDTO };
    this.bookRepos[index] = book;

    return book;
  };

  create = (createBookDTO: CreateBookDTO) => {
    const book = { id: this.bookRepos.length + 1, ...createBookDTO };
    this.bookRepos.push(book);
    return book;
  };
}

export default BookService;
