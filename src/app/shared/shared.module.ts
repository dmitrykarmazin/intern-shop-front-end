import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductsService
  ]
})
export class SharedModule { }
