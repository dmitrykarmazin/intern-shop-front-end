import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  @Output('onLogin')
  onLogin: any = new EventEmitter<{login: string, password: string}>();

  constructor() {}

  ngOnInit(): void {}
}
