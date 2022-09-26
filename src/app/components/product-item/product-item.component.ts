import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
  }

  ngOnInit(): void {}

  setQuantity(e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    this.quantity = parseInt(value, 10);
  }

  onSubmit(product: Product): void {
    console.log('prout', product, this.quantity);
  }
}
