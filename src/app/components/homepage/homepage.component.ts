import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  books: Book[];

  constructor(private bookStore: BookStoreService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookStore.books$.subscribe((books) => (this.books = books));
  }
}
