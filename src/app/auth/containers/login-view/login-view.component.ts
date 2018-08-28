import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducers';
import { Router } from '@angular/router';
import { getIsAuthenticated } from '../../store/selectors/auth.selectors';
import { AuthenticateAction } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(private store: Store<AuthState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(getIsAuthenticated).subscribe((authorized: boolean) => {
      if (authorized) {
        this.router.navigate(['/shop']);
      }
    });
  }

  handleLogin (payload: { login: string, password: string }): void {
    this.store.dispatch(new AuthenticateAction(payload));
  }

}
