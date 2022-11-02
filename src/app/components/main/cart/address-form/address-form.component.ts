import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/core/interfaces/cart.interface';
import { Order } from 'src/app/core/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';
import { CartStoreService } from 'src/app/store/cart-store.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
})
export class AddressFormComponent implements OnInit {
  @Input()
  cartItems: CartItem[];
  totalValue: number;

  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartStoreService: CartStoreService,
    private orderService: OrderService
  ) {}

  addressForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    paymentMethod: new FormControl(''),
  });

  ngOnInit(): void {
    this.totalValue = this.cartStoreService.getTotalValue(this.cartItems);
  }

  onSubmitOrder() {
    const payload: Order = {
      books: this.cartItems,
      totalValue: this.totalValue,
      address: {
        name: this.addressForm.value.name,
        email: this.addressForm.value.email,
        phone: this.addressForm.value.phone,
        street: this.addressForm.value.street,
        city: this.addressForm.value.city,
        county: this.addressForm.value.county,
        zip: this.addressForm.value.zip,
        paymentMethod: this.addressForm.value.paymentMethod,
      },
    };

    this.orderService.addNewOrder(payload).subscribe();

    this.addressForm.reset();
    this.cartStoreService.clearCart();
    this.closeForm.emit();
  }
}
