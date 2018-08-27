import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { RegistrationFormComponent } from './auth/components/registration-form/registration-form.component';
import { ProductPageComponent } from './shop/containers/product-page/product-page.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'product/:id', component: ProductPageComponent },
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
