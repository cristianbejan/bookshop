import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { CartStoreService } from 'src/app/store/cart-store.service';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartStoreService: CartStoreService) {}

  faTrash = faTrash;
  faPlus = faPlus;
  faMinus = faMinus;

  cartItems: CartItem[];
  totalValue: number;

  orderCheckout: boolean = false;
  checkoutBtnText: string = 'Comanda';

  ngOnInit(): void {
    this.cartStoreService.cart$.subscribe((items) => (this.cartItems = items));
    this.getTotalValue();
  }

  deleteBookFromCart(book: CartItem) {
    this.cartStoreService.removeItem(book);
    this.getTotalValue();
  }

  clearCart(): void {
    this.cartStoreService.clearCart();
    this.getTotalValue();
    this.orderCheckout = false;
  }

  getTotalValue(): number {
    return (this.totalValue = this.cartStoreService.getTotalValue(
      this.cartItems
    ));
  }

  increaseQuantity(book: CartItem): void {
    this.cartStoreService.addToCart(book);
    this.getTotalValue();
  }

  removeQuantity(book: CartItem): void {
    this.cartStoreService.removeQuantity(book);
    this.getTotalValue();
  }

  onClickOrderBtn() {
    this.orderCheckout = !this.orderCheckout;
    this.orderCheckout
      ? (this.checkoutBtnText = 'Inchide formularul')
      : (this.checkoutBtnText = 'Comanda');
  }
}
