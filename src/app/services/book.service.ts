import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../core/interfaces/book.interface';
import { map, Observable } from 'rxjs';

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
    return this.http
      .get<{ [key: string]: Book }>(
        'https://bookshop-d4231-default-rtdb.firebaseio.com/books.json'
      )
      .pipe(
        map((responseData) => {
          const booksArray: Book[] = [];
          for (const key in responseData) {
            booksArray.push({ ...responseData[key], id: key });
          }
          return booksArray;
        })
      );
  }
}
