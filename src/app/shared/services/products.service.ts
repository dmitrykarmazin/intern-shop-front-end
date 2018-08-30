import { FiltersObject } from './../models/filters.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8000/products?${this.setPriceFilter(filters)}${this.setCategoryFilter(filters)}${this.setStockFilter(filters)}`);
  }
  
  setPriceFilter(filtersObj): string {
    let query = '';
    if (filtersObj && filtersObj.price) {
      if (!filtersObj.price['from'] && !filtersObj.price['to']) {
        return query = '';
      }
      if (filtersObj.price['from'] || filtersObj.price['to']) {
        return query = `price=${filtersObj.price['from']} to ${filtersObj.price['to']}`;
      }
    }
    return query;
  }

  setCategoryFilter(filtersObj) {
    let query;

    if (filtersObj && filtersObj.category) {
      return query = `&category=${filtersObj.category}`;
    } else {
      return '';
    }
  }

  setStockFilter(filtersObj) {
    let query;

    if (filtersObj && filtersObj.stock) {
      return query = `&stock=${filtersObj.stock}`;
    } else {
      return '';
    }
  }
  
}
