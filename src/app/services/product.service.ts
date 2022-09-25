import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Get list of products from asstes/data.json
   * @todo Connect to the store database
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
