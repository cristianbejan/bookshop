import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/interfaces/book.interface';
import { BookStoreService } from 'src/app/store/book-store.service';
import { CartStoreService } from 'src/app/store/cart-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookStore: BookStoreService,
    private cartStoreService: CartStoreService
  ) {}

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById(): void {
    // get book id from route
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.bookStore.books$.subscribe((books) => {
      for (const key in books) {
        if (books[key].id === id) {
          this.book = books[key];
        }
      }
    });
  }

  addToCart(book: Book) {
    // call the add method from service and map the book properties to cart properties
    this.cartStoreService.addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.imageUrl,
      quantity: 1,
    });
  }
}
