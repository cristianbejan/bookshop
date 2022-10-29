import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../core/interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private _baseUrl = 'https://bookshop-d4231-default-rtdb.firebaseio.com';

  addNewOrder(payload: Order): Observable<Order> {
    const url = `${this._baseUrl}/orders.json`;
    return this.http.post<Order>(url, payload);
  }

  getOrders(): Observable<Order[]> {
    const url = `${this._baseUrl}/orders.json`;

    return this.http.get<{ [key: string]: Order }>(url).pipe(
      map((responseData) => {
        const ordersArray: Order[] = [];
        for (const key in responseData) {
          ordersArray.push({ ...responseData[key], id: key });
        }
        return ordersArray;
      })
    );
  }
}
