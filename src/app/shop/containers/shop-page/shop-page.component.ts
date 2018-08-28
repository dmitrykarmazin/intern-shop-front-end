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

  viewModeValue: boolean = false;
  products$: Observable<Product[]>;
  viewMode: string;
  viewMode$: Observable<string>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<fromStore.ShopState>) {
    this.products$ = this.store.select(fromProductsSelectors.getAllProducts);
    this.categories$ = this.store.select(fromCategoriesSelectors.getAllCategories);
    this.viewMode$ = this.store.select(fromProductsSelectors.getProductsViewMode);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadProducts());
    this.store.dispatch(new fromStore.LoadCategories());
  }

  chooseViewMode(viewMode: string): void {
    if (viewMode === 'grid') {
      this.viewModeValue = false;
    } else {
      this.viewModeValue = true;
    }
    this.store.dispatch(new fromStore.ChangeViewMode(viewMode));
  }

  filters(filters: FiltersObject): void {
    this.store.dispatch(new fromStore.ApplyFilters(filters));
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
