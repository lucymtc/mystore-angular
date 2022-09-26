import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, productDefinition } from 'src/app/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.id = 0;
    this.product = productDefinition;
  }

  /**
   * Retrieves all products from product service and filters by id param.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      this.productService.getProducts().subscribe(data => {
        this.product = data.filter(item => item.id === this.id)[0] || null;
        if (!this.product) {
          this.router.navigate(['/404']);
        }
      });
    });
  }
}
