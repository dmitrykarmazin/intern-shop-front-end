import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { AddToCart } from '../../../cart/store/actions';
import { FiltersObject } from './../../../shared/models/filters.model';

import { CartState } from '../../../cart/store/reducers/cart.reducer';
import * as fromStore from '../../store';
import * as fromProductsSelectors from '../../store/selectors/products.selector';
import * as fromCategoriesSelectors from '../../store/selectors/categories.selector';


@Component({
  selector: 'app-shop',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  viewModeValue: boolean = false;
  viewMode$: Observable<string>;
  filters$: Observable<FiltersObject>;

  constructor(private store: Store<fromStore.ShopState>,
              private cartStore: Store<CartState>) {
    this.products$ = this.store.select(fromProductsSelectors.getAllProducts);
    this.categories$ = this.store.select(fromCategoriesSelectors.getAllCategories);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadProducts());
    this.store.dispatch(new fromStore.LoadCategories());

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViODY5OWYyODc4ZWUyMmVjMDMyNzZhZSIsImxvZ2luIjoidGFueWEyMTAzOTIiLCJwYXNzd29yZCI6IiQyYiQxMiRWempwN3ZkdmZsc01YNmVRYWhvYk5Pb3dxLkpuSERkOFFnRHNtTTRkdlJHeGhtWmlOVmxGZSIsImlhdCI6MTUzNTYxOTgyNiwiZXhwIjoxNTM1NjIyNTI2fQ.tKJ4i89idPUZUxE9bRqX1mVNcDIHUbhrv0hdO84sPfc')
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

  addToCart($event: Product): void {
    this.cartStore.dispatch(new AddToCart({
      product: $event,
      quantity: 1
    }));
  }
}
