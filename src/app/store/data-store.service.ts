import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../core/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  //
  private filteredBooksArr$ = new BehaviorSubject<Book[]>([]);
  currentFilteredBookArr = this.filteredBooksArr$.asObservable(); // keep updated value

  private bookToBeEdited$ = new BehaviorSubject<Book>(null);
  currentBookToBeEdited = this.bookToBeEdited$.asObservable();

  constructor() {}

  // method for update the BehaviorSubject value
  newFilteredBookArr(bookArr: Book[]) {
    this.filteredBooksArr$.next(bookArr);
  }

  newBookToBeEdited(editedBook: Book) {
    this.bookToBeEdited$.next(editedBook);
  }
}
