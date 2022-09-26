import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product, productDefinition } from 'src/app/models/Product';

@Component({
  selector: 'app-quantity-dropdown',
  templateUrl: './quantity-dropdown.component.html',
  styleUrls: ['./quantity-dropdown.component.css']
})
export class QuantityDropdownComponent implements OnInit {
  @Input() product: Product;
  @Input() showAddButton: boolean;
  @Input() selectedOption: number;
  productQuantityOptions = new Array(12);
  quantity = 0;

  constructor(private cartService: CartService) {
    this.product = productDefinition;
    this.showAddButton = true;
    this.selectedOption = 0;
  }

  ngOnInit(): void {
    console.log(this.selectedOption);
  }

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
