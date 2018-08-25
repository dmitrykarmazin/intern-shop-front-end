import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoginFormComponent,
    RegistrationFormComponent
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent
  ]
})
export class AuthModule { }
