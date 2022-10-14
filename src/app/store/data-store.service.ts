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

  constructor() {}

  // method for update the BehaviorSubject value
  newFilteredBookArr(bookArr: Book[]) {
    this.filteredBooksArr$.next(bookArr);
  }
}
