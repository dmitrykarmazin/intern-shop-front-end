import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../store';

@Injectable()
export class NonAuthorizedGuard implements CanActivate {

  isAuthorized$: Observable<boolean>;
  shouldRedirect: boolean;

  constructor(private store: Store<any>) {
    this.isAuthorized$ = this.store.pipe(select(fromAuth.getIsAuthenticated));
    this.isAuthorized$.subscribe((isAuthorized: boolean) => {
      this.shouldRedirect = !isAuthorized;
    });
  }
  canActivate(): boolean {
    return this.shouldRedirect;
  }
}
