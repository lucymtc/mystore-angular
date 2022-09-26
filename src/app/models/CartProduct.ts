import { Product } from './Product';

export class CartProduct {
  product: Product;
  quantity: number;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
    this.quantity = 0;
  }
}
