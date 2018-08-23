import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {ProductsViewComponent} from './containers/products-view/products-view.component';
import {ShopComponent} from './containers/shop/shop.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    SideNavComponent,
    ProductsViewComponent,
    ShopComponent
  ],
  exports: [
    SideNavComponent,
    ProductsViewComponent,
    ShopComponent
  ]
})
export class ShopModule {
}
