import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartProduct } from '../models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductsList: CartProduct[] = [];
  constructor() {}

  /**
   * Retrive the list of products added to the cart.
   */
  getCartProducts(): CartProduct[] {
    return this.cartProductsList;
  }

  /**
   * Adds Product and Quantity to the cart.
   */
  addProductToCart(product: Product, quantity: number): CartProduct[] {
    this.cartProductsList.push({ product, quantity });
    console.log(this.cartProductsList);
    return this.cartProductsList;
  }
}
