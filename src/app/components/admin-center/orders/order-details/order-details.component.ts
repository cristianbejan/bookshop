import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order: Order;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getOrders().subscribe((orders) => {
      for (const key in orders) {
        if (orders[key].id === id) {
          this.order = orders[key];
        }
      }
    });
  }
}
