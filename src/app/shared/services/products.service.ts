import { FiltersObject } from './../models/filters.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  initialFiltersObject: FiltersObject = {
    price: {
      from: 0,
      to: 100000
    },
    category: '',
    stock: ''
  }

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = this.initialFiltersObject): Observable<Product[]> {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    let params: HttpParams = new HttpParams()
      .append('price', `${filters['price']['from']} to ${filters['price']['to']}`)
      .append('category', `${filters['category']}`)
      .append('stock', `${filters['stock']}`)

    return this.http.get<Product[]>('http://localhost:8000/products', {headers, params});
  }
}
