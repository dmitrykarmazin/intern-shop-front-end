import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup ({
    login: new FormControl(''),
    password: new FormControl('')
  });

  @Output('onRegister')
  onRegister: any = new EventEmitter<{login: string, password: string}>();

  constructor() {}

  ngOnInit(): void {}

}
