import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  registrationForm: FormGroup;
  passwordFormGroup: FormGroup;
  @Output('register') register: EventEmitter<{login: string, password: string}> = new EventEmitter<{login: string, password: string}>();

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      login: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]]
    }, {
      validator: this.matchPassword
    });
    // this.passwordFormGroup = this.fb.group({
    //   password: [null, [Validators.required, Validators.minLength(8)]],
    //   confirmPassword: [null, [Validators.required]]
    // }, {
    //   validator: this.matchPassword
    // });
  }

  matchPassword(group: AbstractControl): {matchPassword: boolean} {
    const password: string = group.get('password').value;
    const confirmPassword: string = group.get('confirmPassword').value;
    if (password !== confirmPassword) {
      group.get('confirmPassword').setErrors( {matchPassword: true} );
    } else {
      return null;
    }
  }
}
