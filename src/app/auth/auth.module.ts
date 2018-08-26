import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent,
    RegistrationFormComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent
  ]
})
export class AuthModule { }
