import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  priceToFixed: string;

  constructor() {}

  ngOnInit(): void {
    this.priceTransform();
  }

  priceTransform() {
    this.priceToFixed = this.book.price.toFixed(2);
  }
}
