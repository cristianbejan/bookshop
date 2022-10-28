import { Component, OnInit } from '@angular/core';
import { CartItem } from './core/interfaces/cart.interface';
import { CartStoreService } from './store/cart-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cartItems: CartItem[];

  constructor(private cartStoreService: CartStoreService) {}

  ngOnInit() {
    this.cartStoreService.cart$.subscribe((items) => (this.cartItems = items));
  }
}
