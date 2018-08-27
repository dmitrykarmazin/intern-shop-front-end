import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { LoginComponent } from './components/test/login/login.component';
import { RegistrationComponent } from './components/test/registration/registration.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: 'shop', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
