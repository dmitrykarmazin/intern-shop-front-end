import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';

const routes: Routes = [
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent },
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
