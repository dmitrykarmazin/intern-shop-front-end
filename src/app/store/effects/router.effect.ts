import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({ dispatch: false })
  navigateShop$: any = this.actions$
    .pipe(
      ofType(RouterActions.ACTIVATE_SHOP),
      map((action: RouterActions.ActivateShop) => action.payload),
      tap(({ path, queryParams, params }: any) => {
        this.router.navigate(path, { queryParams, ...params });
      })
    );

  @Effect({ dispatch: false })
  navigateLogin$: any = this.actions$
    .pipe(
      ofType(RouterActions.ACTIVATE_LOGIN),
      map((action: RouterActions.ActivateLogin) => action.payload),
      tap(({ path, queryParams, params }: any) => {
        this.router.navigate(path, { queryParams, ...params });
      })
    );

  @Effect({ dispatch: false })
  navigateRegister$: any = this.actions$
    .pipe(
      ofType(RouterActions.ACTIVATE_REGISTER),
      map((action: RouterActions.ActivateRegister) => action.payload),
      tap(({ path, queryParams, params }: any) => {
        this.router.navigate(path, { queryParams, ...params });
      })
    );
}
