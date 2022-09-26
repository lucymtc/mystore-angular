import { Product, productDefinition } from './Product';

export class CartProduct {
  product: Product;
  quantity: number;

  constructor() {
    this.product = productDefinition;
    this.quantity = 0;
  }
}
