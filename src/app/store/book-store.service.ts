import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from '../core/interfaces/book.interface';
import { BookService } from '../services/book.service';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  books$ = new BehaviorSubject<Book[]>([]);
  private addBook$ = new Subject<Book>();
  private deleteBook$ = new Subject<string>();
  private updateBook$ = new Subject<Book>();

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe((books) => {
      this.books$.next(books);
    });

    this.addBook$.subscribe((newBook) =>
      this.books$.next([...this.books$.getValue(), newBook])
    );

    this.deleteBook$.subscribe((id: string) => {
      this.books$.next(
        this.books$.getValue().filter((book) => {
          return book.id !== id;
        })
      );
    });

    this.updateBook$.subscribe((updatedBook) => {
      const updatedBooks = [];
      this.books$.getValue().forEach((book) => {
        book.id === updatedBook.id
          ? updatedBooks.push(updatedBook)
          : updatedBooks.push(book);
      });
      this.books$.next(updatedBooks);
    });
  }

  addNewBook(book: Partial<Book>) {
    this.bookService
      .addNewBook(book)
      .subscribe((book) => this.addBook$.next(book));
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => this.deleteBook$.next(id));
  }

  updateBook(payload: Partial<Book>, id: string) {
    this.bookService
      .updateBook(payload, id)
      .subscribe((updatedBook) => this.updateBook$.next(updatedBook));
  }
}
