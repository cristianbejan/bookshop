import { CartItem } from './cart.interface';

export interface Order {
  id?: string;
  address: {
    name: string;
    street: string;
    city: string;
    county: string;
    phone: string;
    email: string;
    zip: string;
    paymentMethod: string;
  };
  books: CartItem[];
  totalValue: number;
}
