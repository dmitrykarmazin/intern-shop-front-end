import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { CartState, CartItem } from '../../store/reducers/cart.reducer'
import * as cartSelectors from '../../store/selectors/cart.selector';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  products$: Observable<{[key:string]: CartItem}>;
  ids$: Observable<string[]>;
  subs: Subscription;

  constructor(private store: Store<CartState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(cartSelectors.getCartProducts);
    this.ids$ = this.store.select(cartSelectors.getCartList);
  }

  quantityChange(event): void {
    debugger;
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
