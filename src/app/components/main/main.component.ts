import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  books: Book[];

  constructor(
    private bookStore: BookStoreService,
    private dataStore: DataStoreService
  ) {}

  ngOnInit(): void {
    this.getBooks();

    // subscribe to BehaviorSubject for retrieving the latest value provided in the input from header and pass it as argument to filter function
    this.dataStore.currentInputData.subscribe((inputValue) => {
      this.getBookByTitle(inputValue);
    });
  }

  //GET all books with bookStore (BehaviorSubject)
  getBooks(): void {
    this.bookStore.books$.subscribe((books) => {
      this.books = books;
    });
  }

  // function for getting books filtered by title
  getBookByTitle(serchValue: string) {
    this.bookStore.books$.subscribe((books) => {
      let filteredBooks = [];
      for (const key in books) {
        if (books[key].title.toLowerCase().includes(serchValue)) {
          filteredBooks.push(books[key]);
        }
      }
      this.books = filteredBooks;
    });
  }
}
