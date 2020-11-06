export interface Product {
  id: number;
  name: string;
  price: number;
  desrc: string;
  imgUrl: string;
  qnt: number;
}

export interface Cart {
  items: Product[];
  shippingPrice: number;
  taxRate: number;
}
