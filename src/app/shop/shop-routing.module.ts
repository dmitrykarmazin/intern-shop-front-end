import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPageComponent } from '../shop/containers/product-page/product-page.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
