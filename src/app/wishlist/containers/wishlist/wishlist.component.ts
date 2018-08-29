import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import * as wishActions from '../../store/actions/wish.action';
import * as wishSelectors from '../../store/selectors/wish.selector';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(private store: Store<State>) {
    // this.store.select(wishSelectors.getWishCount).subscribe((data: any) => debugger );
  }

}
