import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../core/interfaces/book.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://bookshop-d4231-default-rtdb.firebaseio.com/books.json';

  addNewBook(payload: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, payload);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<{ [key: string]: Book }>(this.baseUrl).pipe(
      map((responseData) => {
        const booksArray: Book[] = [];
        for (const key in responseData) {
          booksArray.push({ ...responseData[key], id: key });
        }

        return booksArray;
      })
    );
  }

  getBookById(id: string): Observable<Book[]> {
    return this.http.get<{ [key: string]: Book }>(this.baseUrl).pipe(
      map((responseData) => {
        const booksArray: Book[] = [];
        for (const key in responseData) {
          booksArray.push({ ...responseData[key], id: key });
        }
        return booksArray.filter((item) => item.id === id);
      })
    );
  }
}

// ?orderBy="$key"&equalTo="id"
