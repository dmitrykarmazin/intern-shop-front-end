import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
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

  products$: Observable<Product[]>;
  wishCount$: Observable<number>;

  constructor(private store: Store<State>) {
    this.products$ = this.store.pipe(select(wishSelectors.getWishProducts));
    this.wishCount$ = this.store.pipe(select(wishSelectors.getWishCount));
  }

  addToCart($event: Product): void {
    this.store.dispatch( new AddToCart({
      product: $event,
      quantity: 1
    }));
  }

  removeFromList($event: string): void {
    this.store.dispatch( new wishActions.WishRemoteProduct($event) );
  }

}
