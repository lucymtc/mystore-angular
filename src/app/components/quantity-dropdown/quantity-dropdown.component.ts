import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() selectedQuantity = 0;
  @Output() changeTotalPrice: EventEmitter<number> = new EventEmitter();

  productQuantityOptions = new Array(12);
  buttonLabel = 'Add To Cart';

  constructor(private cartService: CartService) {
    this.product = productDefinition;
    this.showAddButton = true;
    this.selectedQuantity = 0;
  }

  ngOnInit(): void {}

  /**
   * Set product quantity on dropdown change.
   */
  setQuantity(product: Product, e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    this.selectedQuantity = parseInt(value, 10);
    if (!this.showAddButton) {
      this.cartService.updateProductInCart(product, this.selectedQuantity);
      this.changeTotalPrice.emit();
    }
  }

  /**
   * On Submit form Add To Cart, add product to the cart items list.
   */
  onSubmit(product: Product): void {
    this.cartService.addProductToCart(product, this.selectedQuantity);
    this.buttonLabel = 'Added!';
  }

  resetLabel(): void {
    this.buttonLabel = 'Add To Cart';
  }
}
