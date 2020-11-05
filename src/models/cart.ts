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

  /*getSubTotoal() {
    return this.items.reduce((acc, item) => acc + item.getTotal(), 0);
  }

  getTotal() {
    return (
      this.getSubTotoal() +
      this.shippingPrice +
      (this.getSubTotoal() * this.taxRate) / 100
    );
  }*/
}
