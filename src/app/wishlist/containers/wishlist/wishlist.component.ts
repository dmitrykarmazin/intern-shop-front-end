import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/models/product.model';
import { State } from '../../store/reducers';
import * as wishActions from '../../store/actions/wish.action';
import * as wishSelectors from '../../store/selectors/wish.selector';
import { AddToCart } from '../../../cart/store/actions/cart.action';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  private products$: Observable<Product[]>;
  private wishCount$: Observable<number>;

  constructor(private store: Store<State>) {
    this.products$ = this.store.select(wishSelectors.getWishProducts);
    this.wishCount$ = this.store.select(wishSelectors.getWishCount);

    ////////////////////////////////////    Test data
    /* setTimeout(() => this.store.dispatch(new wishActions.WishAddNew(
      { id: '5', thumbnail: '', title: 'Title1', description: 'Description1',
            category_id: '1', category_title: 'Mobile', price: '15000', stock: 38 }
    )), 3000); */
    //////////////////////////////////
  }

  protected addToCart($event: Product): void {
    this.store.dispatch( new AddToCart({
      product: $event,
      quantity: 1
    }));
  }

  protected removeFromList($event: string): void {
    this.store.dispatch( new wishActions.WishRemoteProduct($event) );
  }

}
