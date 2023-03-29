import { HomeController } from './home';
import { BookController } from './books';

import { bookService } from '../services';

export * from './home';
export * from './books';

export const homeController = new HomeController();
export const bookController = new BookController(bookService);
