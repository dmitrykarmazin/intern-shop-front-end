import { FiltersObject } from './../models/filters.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
    // return this.http.get<Product[]>('http://localhost:8000/products');
  }
}
