import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartService: CartService, private router: Router) {
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
   * @todo on real world app we would save the order in a database and send order ID
   */
  onSubmitCheckout(): void {
    this.cartService.destroyCart();
    this.router.navigate([`/thank-you/${this.fullName}/${this.totalPrice}`]);
  }

  /**
   * Update totalPrice.
   */
  onChangePrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
