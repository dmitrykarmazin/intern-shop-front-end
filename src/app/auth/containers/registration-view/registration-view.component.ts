import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/reducers/auth.reducers';
import { Router } from '@angular/router';
import { SignUpAction } from '../../store/actions/auth.actions';
import { getIsAuthenticated } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationViewComponent implements OnInit {

  constructor(private store: Store<AuthState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(getIsAuthenticated).subscribe((authorized: boolean) => {
      if (authorized) {
        this.router.navigate(['/shop']);
      }
    });
  }

  handleRegistration (payload: { login: string, password: string }): void {
    this.store.dispatch(new SignUpAction(payload));
  }

}
