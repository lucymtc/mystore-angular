import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { environment } from '../../environments/environment';

const API_HOST = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * Get list of products from api.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_HOST}/products`);
  }
}
