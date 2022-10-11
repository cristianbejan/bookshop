import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  slicedTitle: string;
  priceToFixed: string;

  constructor() {}

  ngOnInit(): void {
    this.titleTransform();
    this.priceTransform();
  }

  titleTransform() {
    if (this.book.title.length > 24) {
      this.slicedTitle = this.book.title.slice(0, 23) + '...';
    } else {
      this.slicedTitle = this.book.title;
    }
  }
  priceTransform() {
    this.priceToFixed = this.book.price.toFixed(2);
  }
}
