import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material/material.module';
import { reducers } from './store/reducers';
import { WishlistComponent } from './containers/wishlist/wishlist.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('wish', reducers)
  ],
  declarations: [
    WishlistComponent
  ],
  exports: [
    WishlistComponent
  ]
})
export class WishlistModule { }
