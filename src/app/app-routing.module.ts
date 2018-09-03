import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { LoginViewComponent } from './auth/containers/login-view/login-view.component';
import { RegistrationViewComponent } from './auth/containers/registration-view/registration-view.component';
import { ProductPageComponent } from './shop/containers/product-page/product-page.component';
import { WishlistComponent } from './wishlist/containers/wishlist/wishlist.component';

import * as fromGuards from './auth/guards';

const routes: Routes = [
  { path: 'wish', component: WishlistComponent, canActivate: [fromGuards.AuthGuard] },
  { path: 'shop', component: ShopPageComponent, canActivate: [fromGuards.AuthGuard] },
  { path: 'login', component: LoginViewComponent, canActivate: [fromGuards.NonAuthorizedGuard] },
  { path: 'register', component: RegistrationViewComponent, canActivate: [fromGuards.NonAuthorizedGuard] },
  { path: 'shop/products/:id', component: ProductPageComponent, canActivate: [fromGuards.AuthGuard] },
  { path: 'shop', component: ShopPageComponent, canActivate: [fromGuards.AuthGuard] },
  { path: 'cart', component: CartPageComponent, canActivate: [fromGuards.AuthGuard] },
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
export class AppRoutingModule {}
