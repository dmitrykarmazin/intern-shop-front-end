import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './containers/admin/admin.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    MainComponent,
    ProductsComponent,
    OrdersComponent
  ]
})
export class AdminModule { }
