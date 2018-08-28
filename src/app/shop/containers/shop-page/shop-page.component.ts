import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { FiltersObject } from './../../../shared/models/filters.model';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromSelectors from '../../store/selectors/products.selector';

@Component({
  selector: 'app-shop',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  products$: Observable<Product[]>;
  viewMode$: Observable<string>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.select(fromSelectors.getAllProducts);
  }

  ngOnInit(): void {
    this.products$ = this.store.select(fromProductsSelectors.getAllProducts);
    this.categories$ = this.store.select(fromCategoriesSelectors.getAllCategories);
    this.viewMode$ = this.store.select(fromProductsSelectors.getProductsViewMode);

    this.store.dispatch(new fromStore.LoadProducts());
    this.store.dispatch(new fromStore.LoadCategories());
  }

  filters(filters: FiltersObject): void {
    this.store.dispatch(new fromStore.ApplyFilters(filters));
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
