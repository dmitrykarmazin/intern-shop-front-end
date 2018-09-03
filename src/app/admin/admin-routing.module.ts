import { AdminComponent } from './containers/admin/admin.component';
import { OrdersComponent } from './components/orders/orders.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'home', component: MainComponent },
    { path: 'products' , component: ProductsComponent },
    { path: 'orders' , component: OrdersComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
