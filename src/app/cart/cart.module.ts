import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';
import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { CartEffects } from './store/effects/cart.effects';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [
    CartPageComponent,
    CartItemsComponent,
    CartTotalComponent
  ]
})
export class CartModule { }
