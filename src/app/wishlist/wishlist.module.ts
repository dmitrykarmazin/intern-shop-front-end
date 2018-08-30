import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { reducers } from './store/reducers';
import { WishlistComponent } from './containers/wishlist/wishlist.component';
import { WishItemComponent } from './components/wish-item/wish-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('wish', reducers),
    RouterModule
  ],
  declarations: [
    WishlistComponent,
    WishItemComponent
  ],
  exports: [
    WishlistComponent,
    WishItemComponent
  ]
})
export class WishlistModule { }
