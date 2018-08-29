import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from './shop/containers/shop-page/shop-page.component';
import { CartPageComponent } from './cart/containers/cart-page/cart-page.component';
import { LoginViewComponent } from './auth/containers/login-view/login-view.component';
import { RegistrationViewComponent } from './auth/containers/registration-view/registration-view.component';
import { ProductPageComponent } from './shop/containers/product-page/product-page.component';
import { WishlistComponent } from './wishlist/containers/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'wish', component: WishlistComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegistrationViewComponent },
  { path: 'shop/products/:id', component: ProductPageComponent },
  { path: 'shop', component: ShopPageComponent },
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
export class AppRoutingModule {}
