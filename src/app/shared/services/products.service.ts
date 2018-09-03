import { FiltersObject } from './../models/filters.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import * as fromFiltersMethods from '../utils/filters-methods';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(filtersObj: FiltersObject = {}): Observable<Product[]> {
    let url = `${environment.api_url}/products`;
    let filters = fromFiltersMethods.setFilters(filtersObj);

    return this.http.get<Product[]>(`${url}${filters}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.api_url}/products`, product);
  }

}
