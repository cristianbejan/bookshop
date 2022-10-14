import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  books: Book[];

  constructor(private bookStore: BookStoreService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  //GET all books with bookStore (BehaviorSubject)
  getBooks(): void {
    this.bookStore.books$.subscribe((books) => {
      this.books = books;
    });
  }
}
