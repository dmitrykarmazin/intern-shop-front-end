import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../auth/store/reducers/auth.reducers';
import { SignOutAction } from '../../auth/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { getIsAuthenticated } from '../../auth/store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthorized$: Observable<boolean>;
  constructor(private store: Store<AuthState>) {
    this.isAuthorized$ = this.store.select(getIsAuthenticated);
  }

  signOut(): void {
    this.store.dispatch(new SignOutAction());
  }
}
