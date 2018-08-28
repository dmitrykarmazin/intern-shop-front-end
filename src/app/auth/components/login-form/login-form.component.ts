import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm: FormGroup;
  @Output('login') login: any = new EventEmitter<{login: string, password: string}>();

  constructor() {
    this.loginForm = new FormGroup ({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }
}
