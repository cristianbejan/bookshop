import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../core/interfaces/book.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://bookshop-d4231-default-rtdb.firebaseio.com';

  addNewBook(payload: Partial<Book>): Observable<Book> {
    const url = `${this.baseUrl}/books.json`;
    return this.http.post<Book>(url, payload);
  }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books.json`;

    return this.http.get<{ [key: string]: Book }>(url).pipe(
      map((responseData) => {
        const booksArray: Book[] = [];
        for (const key in responseData) {
          booksArray.push({ ...responseData[key], id: key });
        }

        return booksArray;
      })
    );
  }

  deleteBook(id: string): Observable<void> {
    const url = `${this.baseUrl}/books/${id}.json`;

    return this.http.delete<void>(url);
  }

  updateBook(payload: Partial<Book>, id: string): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}.json`;

    return this.http.patch<Book>(url, payload);
  }
}
