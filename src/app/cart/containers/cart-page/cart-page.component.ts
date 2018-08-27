import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { ProductsService } from '../../services/cart.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  public products$: Observable<Product[]>;
  subs: Subscription;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(fromStore.getAllItems);
  }

  // getCountIsEmpty(): number {
  //   return this.products.reduce((total: number, e: Product) => {
  //     total += e.price;

  //     return total;
  //   }, 0);
  // }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
