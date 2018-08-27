import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsViewComponent } from './containers/products-view/products-view.component';
import { ShopPageComponent } from './containers/shop-page/shop-page.component';
import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';

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
    ShopPageComponent,
    ProductListComponent,
    ListItemComponent,
    GridItemComponent
  ]
})
export class ShopModule {
}
