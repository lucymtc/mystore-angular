import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  productQuantityOptions = new Array(12);
  quantity = 0;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
  }

  ngOnInit(): void {}

  /**
   * Triggers on quantity dropdown chance and sets the product quantity.
   */
  setQuantity(e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    this.quantity = parseInt(value, 10);
  }

  /**
   * On Submit form Add To Cart, add product to the cart items list.
   */
  onSubmit(product: Product): void {
    this.cartService.addProductToCart(product, this.quantity);
  }
}
