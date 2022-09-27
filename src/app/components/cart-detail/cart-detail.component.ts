import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartProducts: CartProduct[];
  totalPrice = 0;
  fullName = '';
  address = '';
  creditCard = '';

  constructor(private cartService: CartService) {
    this.cartProducts = [];
  }

  /**
   * Set cart products data.
   */
  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  /**
   * Remove product from cart.
   */
  removeFromCart(product: Product): void {
    this.cartProducts = this.cartService.updateProductInCart(product, 0);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  /**
   * On Sumbit checkout form.
   */
  onSubmit(): void {
    alert(`${this.fullName} your order is being processed!`);
  }

  onChangePrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
