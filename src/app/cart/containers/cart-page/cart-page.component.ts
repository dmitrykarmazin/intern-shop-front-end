import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public products$: Observable<{Product, number} []>;
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

}
