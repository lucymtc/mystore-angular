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
    this.cartProducts.forEach(item => {
      this.totalPrice = this.totalPrice + item.product.price * item.quantity;
    });

    // Round to 2 decimals.
    this.totalPrice = Math.round(this.totalPrice * 100) / 100;
  }

  /**
   * Remove product from cart.
   */
  removeFromCart(product: Product): void {
    this.cartProducts = this.cartService.updateProductInCart(product, 0);
  }

  /**
   * On Sumbit checkout form.
   */
  onSubmit(): void {
    alert(`${this.fullName} your order is being processed!`);
  }
}
