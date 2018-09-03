import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuthorized$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.isAuthorized$ = this.store.pipe(select(fromAuth.getIsAuthenticated));
    // this.isAuthorized$.subscribe((data: boolean) => {
    //   this.temp = data;
    //   debugger;
    // });
  }
  canActivate(): Observable<boolean> {
    return this.isAuthorized$;
  }
}
