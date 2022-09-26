import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/CartProduct';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cartProducts: CartProduct[];

  constructor(private cartService: CartService) {
    this.cartProducts = [];
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
    console.log(this.cartProducts);
  }
}
