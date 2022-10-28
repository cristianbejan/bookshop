export interface Order {
  id?: string;
  adress: {
    name: string;
    street: string;
    city: string;
    county: string;
    phone: number;
  };
  email: string;
  books: string[];
}
