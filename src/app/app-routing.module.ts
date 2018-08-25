import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent },
  { path: '**', redirectTo: 'shop', pathMatch: 'full' }
=======
import { ShopComponent } from './components/test/shop/shop.component';
import { LoginComponent } from './components/test/login/login.component';
import { RegistrationComponent } from './components/test/registration/registration.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: 'cart', pathMatch: 'full' }
>>>>>>> IS cart page - base render
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
