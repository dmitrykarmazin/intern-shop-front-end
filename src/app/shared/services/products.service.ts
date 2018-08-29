import { FiltersObject } from './../models/filters.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    let headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    debugger;

    let params: HttpParams = new HttpParams();

      // (filters['price']) ? params.set('price', `${filters['price']['from']} to ${filters['price']['to']}`) : '';
      // (filters['category']) ? params.set('category', `${filters['category']}`) : '';
      // (filters['stock']) ? params.set('stock', `${filters['stock']}`) : '';

    

    return this.http.get<Product[]>(`http://localhost:8000/products?${this.setFilters(filters)}`, {headers});
  }

  setFilters(filtersObj): string {
    let query = '';
    let priceQuery = '';
    let categoryQuery = '';
    let stockQuery = '';

    if (filtersObj['price']) {
      priceQuery = `price=${filtersObj['price']['from']} to ${filtersObj['price']['to']}`;
      return query += priceQuery;
    } else {
      return priceQuery = '';
    }

    if (filtersObj['category']) {
      categoryQuery = `category=${filtersObj['category']}`;
      return query += categoryQuery;
    } else {
      return categoryQuery = '';
    }

    if (filtersObj['stock']) {
      stockQuery = `stock=${filtersObj['stock']}`;
      return query += stockQuery;
    } else {
      return stockQuery = '';
    }
  }

  // slicer(string): string {
  //   const str = string;

  //   return string;
  // }
}
