import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { State, Store } from '@ngrx/store';
// import * as fromReducers from '../../store/reducers/index';
import { AuthenticateAction, AuthenticationSuccessAction } from '../../store/actions/auth.actions';
// import * as selectors from '../../store/selectors/index';
import { Observable } from 'rxjs';
import { getAuthenticatedUser, getAuthenticationError, isAuthenticationLoading } from '../../store/selectors/auth.selectors';
import { AuthState } from "../../store/reducers/auth.reducers";

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

  user: User = new User();
  public loading: Observable<boolean>;
  public error: Observable<any>;

  constructor(private store: Store<AuthState>) {

  }

  ngOnInit(): void {
    this.loading = this.store.select(isAuthenticationLoading);
// set error
    this.error = this.store.select(getAuthenticationError);

  }

  onSubmit(): void {
    // check
    const payload = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    console.log(payload);
    this.store.dispatch(new AuthenticateAction(payload));
  }

}
