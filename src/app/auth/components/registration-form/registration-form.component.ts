import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducers';
import { SignUpAction } from '../../store/actions/auth.actions';

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

  user: User = new User();

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      login: this.registrationForm.value.login,
      password: this.registrationForm.value.password
    };
    console.log(payload);
    this.store.dispatch(new SignUpAction(payload));
  }
}
