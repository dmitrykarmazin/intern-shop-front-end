import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CartPageComponent,
    CartItemsComponent,
    CartTotalComponent
  ]
})
export class CartModule { }
