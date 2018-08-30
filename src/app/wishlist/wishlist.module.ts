import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { reducers } from './store/reducers';
import { WishlistComponent } from './containers/wishlist/wishlist.component';
import { WishItemComponent } from './components/wish-item/wish-item.component';
import { WishEffects } from './store/effects/wish.effect';
import { WishService } from './services/wish.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('wish', reducers),
    EffectsModule.forFeature([WishEffects]),
    RouterModule,
  ],
  declarations: [
    WishlistComponent,
    WishItemComponent,
  ],
  exports: [
    WishlistComponent,
  ],
  providers: [
    WishService
  ]
})
export class WishlistModule { }
