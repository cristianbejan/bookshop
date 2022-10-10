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

  constructor(private bookService: BookService) {
    this.addBook$.subscribe((newBook) =>
      this.books$.next([...this.books$.getValue(), newBook])
    );
    this.bookService.getBooks().subscribe((books) => {
      this.books$.next(books);
    });
  }

  addNewBook(book: Book) {
    this.bookService
      .addNewBook(book)
      .subscribe((book) => this.addBook$.next(book));
  }
}
