import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsViewComponent } from './containers/products-view/products-view.component';
import { ShopPageComponent } from './containers/shop-page/shop-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    SidebarComponent,
    ProductsViewComponent,
    ShopPageComponent
  ],
  exports: [
    SidebarComponent,
    ProductsViewComponent,
    ShopPageComponent
  ]
})
export class ShopModule {
}
