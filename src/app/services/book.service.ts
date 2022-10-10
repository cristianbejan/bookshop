import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../core/interfaces/book.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  addNewBook(payload: Book): Observable<Book> {
    return this.http.post<Book>(
      'https://bookshop-d4231-default-rtdb.firebaseio.com/books.json',
      payload
    );
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      'https://bookshop-d4231-default-rtdb.firebaseio.com/books.json'
    );
  }
}
