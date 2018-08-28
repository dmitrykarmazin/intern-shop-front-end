import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShopModule } from './shop/shop.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { routerReducer, effects } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
<<<<<<< 0f385fa4a8f3446b1d3584ef6d6ec7f6d70787c4

=======
>>>>>>> clear garbage
  ],
  imports: [
    BrowserModule,
    ShopModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    EffectsModule.forRoot([...effects]),
    StoreModule.forRoot(routerReducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    CartModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
