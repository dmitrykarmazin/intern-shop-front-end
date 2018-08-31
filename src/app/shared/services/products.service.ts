import { FiltersObject } from './../models/filters.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductsService {
  bufferQuery: string = '';
  bufferQueryPrice: string = '';
  bufferQueryCategory: string = '';
  bufferQueryStock: string = '';

  constructor(private http: HttpClient) {}

  getProducts(filters: FiltersObject = {}): Observable<Product[]> {
    return this
      .http
      .get<Product[]>
      (`${environment.api_url}/products${this.setFilters(filters)}`);
  }

  setFilters(filtersObj: FiltersObject) {
    let mainQuery: string = this.bufferQuery;

    if (filtersObj && filtersObj.price) {
      mainQuery += this.setPriceFilter(filtersObj, mainQuery);
    }

    if (filtersObj && filtersObj.category) {
      mainQuery += this.setCategoryFilter(filtersObj, mainQuery);
    }

    if (filtersObj && filtersObj.stock) {
      mainQuery += this.setStockFilter(filtersObj, mainQuery);
    }

    this.bufferQuery = mainQuery;
    return mainQuery;
  }

  setPriceFilter(filtersObj: FiltersObject, mainQuery: string): string {
    debugger;
    (mainQuery === '') ? mainQuery += '?' : mainQuery;

    let queryPrice: string = this.bufferQueryPrice;
    if (!filtersObj.price['from'] && !filtersObj.price['to']) {
      if (!mainQuery.match('price')) {
        return mainQuery;
      } else {
        let newQuery = mainQuery.slice(mainQuery.indexOf(queryPrice), queryPrice.length);
        return mainQuery += newQuery;
      }
    }
    if (filtersObj.price['from'] || filtersObj.price['to']) {
      if (!mainQuery.match('price')) {
        queryPrice = `price=${filtersObj.price['from']} to ${filtersObj.price['to']}`;
        return mainQuery += queryPrice;
      } else {
        let newQuery = mainQuery.slice(mainQuery.indexOf(queryPrice), queryPrice.length);
        return mainQuery += newQuery;
      }
    }

    this.bufferQueryPrice = queryPrice;
    return 
  }

  setCategoryFilter(filtersObj: FiltersObject, mainQuery: string): string {
    let queryCategory: string = this.bufferQueryCategory;

    // return queryCategory = `&category=${filtersObj.category}`;
    return mainQuery;
  }

  setStockFilter(filtersObj: FiltersObject, mainQuery: string): string {
    let queryStock: string = this.bufferQueryStock
    ;
    // return queryStock = `&stock=${filtersObj.stock}`;
    return mainQuery;
  }
}
