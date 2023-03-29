export interface BookEntity {
  id: number;
  title: string;
}

export type CreateBookDTO = Omit<BookEntity, 'id'>;
export type UpdateBookDTO = Partial<CreateBookDTO>;
