import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { Filters } from '../../components/sidebar/sidebar.component';

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

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.select(fromSelectors.getAllProducts);
  }

  ngOnInit(): void {
  }

  filters(filters: Filters): void {
    // TODO dispatch to store
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
