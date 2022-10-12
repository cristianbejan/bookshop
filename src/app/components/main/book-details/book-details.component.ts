import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/core/interfaces/book.interface';

import { BookStoreService } from 'src/app/store/book-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  priceToFixed: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookStore: BookStoreService
  ) {}

  ngOnInit(): void {
    this.getBookById();
    this.priceTransform();
  }

  getBookById(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.bookStore.books$.subscribe((books) => {
      for (const key in books) {
        if (books[key].id === id) {
          this.book = books[key];
        }
      }
    });
  }

  priceTransform() {
    this.priceToFixed = this.book.price.toFixed(2);
  }
}
