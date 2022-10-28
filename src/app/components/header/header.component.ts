import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/core/interfaces/book.interface';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { AuthService } from 'src/app/services/auth.service';

import { BookStoreService } from 'src/app/store/book-store.service';
import { DataStoreService } from 'src/app/store/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCart = faCartShopping;
  faMagnifying = faMagnifyingGlass;

  private _cartItems: CartItem[];
  totalQuantity: number = 0;

  // get the cart items for calculate the number of books from cart and display it to icon
  @Input()
  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  set cartItems(books: CartItem[]) {
    this._cartItems = books;

    this.totalQuantity = books
      .map((book) => book.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  //get value from search input
  searchQuery = new FormControl('', Validators.required);

  constructor(
    private dataStore: DataStoreService,
    private bookStore: BookStoreService,
    private router: Router,
    public authService: AuthService
  ) {}

  // isLoggedIn$: Observable<boolean> = this.authService.user$
  //   .asObservable()
  //   .pipe(map((user) => !!user));

  ngOnInit(): void {}

  onSearch() {
    if (this.searchQuery.value) {
      // gett books filtered by title
      this.bookStore.books$.subscribe((books) => {
        let filteredBooksArr: Book[] = [];
        for (const key in books) {
          if (books[key].title.toLowerCase().includes(this.searchQuery.value)) {
            filteredBooksArr.push(books[key]);
          }
        }
        this.dataStore.newFilteredBookArr(filteredBooksArr); //pass new value to BehaviorSubject
        this.goToSearchResults();
      });
    }
  }

  goToSearchResults() {
    this.router.navigate(['search-results']);
  }
}
