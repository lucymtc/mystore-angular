import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartProduct } from '../models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storageName = 'mystorecart';
  constructor() {}

  /**
   * Retrive the list of products added to the cart.
   */
  getCartProducts(): CartProduct[] {
    const carStore = window.localStorage.getItem(this.storageName);
    if (!carStore) {
      return [];
    }
    return JSON.parse(carStore);
  }

  /**
   * Adds Product and Quantity to the cart or add quantity to existing product.
   */
  addProductToCart(product: Product, quantity: number): CartProduct[] {
    const cartProductsList = this.getCartProducts();
    console.log(cartProductsList);

    const foundIndex = cartProductsList.findIndex(
      item => item?.product?.id === product.id
    );

    if (-1 === foundIndex) {
      cartProductsList.push({ product, quantity });
    } else {
      cartProductsList[foundIndex].quantity =
        cartProductsList[foundIndex].quantity + quantity;
    }

    window.localStorage.setItem(
      this.storageName,
      JSON.stringify(cartProductsList)
    );

    return cartProductsList;
  }
}
