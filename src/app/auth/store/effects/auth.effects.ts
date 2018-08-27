import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators';
import {
  AuthenticatedErrorAction,
  AuthenticatedSuccessAction, AuthenticationErrorAction,
  AuthenticationSuccessAction, SignOutAction, SignOutErrorAction, SignOutSuccessAction, SignUpErrorAction,
  SignUpSuccessAction
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  // effects go here
  @Effect()
  authenticate$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE),
    switchMap((action) => {
      // debugger
      console.log(action['payload']);

      return this.authService.logIn(action['payload'].login, action['payload'].password)
        .pipe(
          map((user) => {
            console.log(user);
            // debugger

            return new AuthenticationSuccessAction({token: user.token});
          }),
          catchError((error: any) => {
            console.log(error);
            return of(new AuthenticationErrorAction({error: error}));
          })
        );
    })
  );

  @Effect()
  signUp$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_UP),
    switchMap((action) => {
      // debugger
      console.log(action['payload']);

      return this.authService.signUp(action['payload'].login, action['payload'].password)
        .pipe(
          map((user) => {
            console.log(user);
            // debugger

            return new SignUpSuccessAction({token: user.token});
          }),
          catchError((error: any) => {
            console.log(error);
            return of(new SignUpErrorAction({error: error}));
          })
        );
    })
  );

  @Effect()
  signOut$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.SIGN_OUT),
    switchMap((action) => {
      // debugger
      console.log(action['payload']);

      return this.authService.signOut()
        .pipe(
          map((user) => {
            console.log(user);
            // debugger

            return new SignOutSuccessAction();
          }),
          catchError((error: any) => {
            console.log(error);
            return of(new SignOutErrorAction({error: error}));
          })
        );
    })
  );

  @Effect()
  authenticated: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATED),
    switchMap((action) => {
      return this.authService.signUp(action['payload'].login, action['payload'].password)
        .pipe(
          map(user => new AuthenticatedSuccessAction({authenticated: (user !== null), user: user})),
        catchError(error => of(new AuthenticatedErrorAction({error: error})))
        );
    })
  );

  @Effect({ dispatch: false })
  logInSuccess$: Observable<any> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_SUCCESS),
    tap((user) => {
      console.log(user);
      localStorage.setItem('token', user['payload'].token);
      console.log(localStorage);
    })
  );

  @Effect({ dispatch: false })
  signOutSuccess$: Observable<any> = this.actions$.pipe(
    ofType(authActions.SIGN_OUT_SUCCESS),
    tap((user) => {
      console.log(user);
      localStorage.removeItem('token');
      console.log(localStorage);
    })
  );

  @Effect({ dispatch: false })
  logInFailure: Observable<any> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_ERROR),
    map(action => {
      alert('asdasdd');
    }),
    catchError((error: Error) => of(error))
  );
}
