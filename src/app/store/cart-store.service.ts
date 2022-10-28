import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../core/interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  cart$ = new BehaviorSubject<CartItem[]>([]);
  savedCartItems: CartItem[];

  constructor() {
    // get the items from local storage and if they exists, set the value to BS, else set value with empty array
    this.savedCartItems = JSON.parse(localStorage.getItem('items'));
    this.savedCartItems
      ? this.cart$.next(this.savedCartItems)
      : (this.savedCartItems = []);
  }

  addToCart(book: CartItem): void {
    const items = [...this.cart$.value]; // create new array from BS

    // check if the book exists already in cart
    const bookInCart = items.find((item) => item.id === book.id);

    if (bookInCart) {
      bookInCart.quantity += 1;

      // save cart items to local storage
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      items.push(book);

      // update cart items in local storage
      localStorage.setItem('items', JSON.stringify(items));
    }

    this.cart$.next(items);
  }

  removeItem(book: CartItem) {
    const filteredItems = this.cart$.value.filter(
      (item) => item.id !== book.id
    );
    this.cart$.next(filteredItems);

    // update cart items in local storage
    localStorage.setItem('items', JSON.stringify(filteredItems));

    return filteredItems;
  }

  removeQuantity(book: CartItem) {
    let bookToRemove: CartItem;

    let filteredItems = this.cart$.value.map((item) => {
      if (item.id === book.id) {
        item.quantity--;
        if (item.quantity === 0) {
          bookToRemove = item;
        }
      }
      return item;
    });

    if (bookToRemove) {
      filteredItems = this.removeItem(bookToRemove);
    }

    this.cart$.next(filteredItems);
  }

  clearCart(): void {
    this.cart$.next([]);
    //clear local storage
    localStorage.clear();
  }

  getTotalValue(books: CartItem[]): number {
    return books
      .map((book) => book.price * book.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
