import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ShopModule } from './shop/shop.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< 08913007c49230ce0ae965f549ad0a49d0355d0a
=======
import { ShopModule } from './shop/shop.module';
>>>>>>> product items - basic view
import { LoginComponent } from './components/test/login/login.component';
import { RegistrationComponent } from './components/test/registration/registration.component';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< 08913007c49230ce0ae965f549ad0a49d0355d0a
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    CartModule
=======
    ShopModule,
    AppRoutingModule
>>>>>>> product items - basic view
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
