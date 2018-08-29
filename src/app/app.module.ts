import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { reducers, effects, CustomSerializer } from './store';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor} from './shared/interceptor/token.interceptor';
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';

import { NotificationService } from './shared/services/notification';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    StoreRouterConnectingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    CartModule,
    StoreModule.forRoot({}),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    NotificationService

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
