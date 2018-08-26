import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
<<<<<<< e6d299709c715d3b8fdfb81293d2561c35a92ea7
import { LoginComponent } from './components/test/login/login.component';
import { RegistrationComponent } from './components/test/registration/registration.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: 'cart', pathMatch: 'full' }
=======
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';
import { ProductPageComponent } from './shop/containers/product-page/product-page.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '**', redirectTo: 'shop', pathMatch: 'full' }
>>>>>>> add product-page, update module
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
