import { Product } from './Product';

export class CartProduct {
  product: Product | null;
  quantity: number;

  constructor() {
    this.product = null;
    this.quantity = 0;
  }
}
