import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup ({
    login: new FormControl(''),
    password: new FormControl('')
  });
  constructor() {

  }

  ngOnInit() {}

  onSubmit() {
    // check
    console.log(this.loginForm.value);
  }

}
