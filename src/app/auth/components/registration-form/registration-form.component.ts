import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  registrationForm: FormGroup;
  @Output('register') register: any = new EventEmitter<{login: string, password: string}>();

  constructor() {
    this.registrationForm = new FormGroup ({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }
}
