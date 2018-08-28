import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { LoginViewComponent } from './auth/containers/login-view/login-view.component';
import { RegistrationViewComponent } from './auth/containers/registration-view/registration-view.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegistrationViewComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: 'cart', pathMatch: 'full' }
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
