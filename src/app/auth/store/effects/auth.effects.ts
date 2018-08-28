import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators';
import {
  AuthenticationErrorAction,
  AuthenticationSuccessAction, GetUserInfoFailAction, GetUserInfoSuccessAction, SignOutAction,
  SignOutErrorAction,
  SignOutSuccessAction,
  SignUpErrorAction,
  SignUpSuccessAction
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  // effects go here
  @Effect()
  authenticate$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE),
    switchMap((action) => {
      // debugger

      return this.authService.logIn(action['payload'].login, action['payload'].password)
        .pipe(
          map((user) => {
            // debugger

            return new AuthenticationSuccessAction({token: user.token});
          }),
          catchError((error: any) => {
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

      return this.authService.signOut()
        .pipe(
          map((user) => {

            return new SignOutSuccessAction();
          }),
          catchError((error: any) => {
            return of(new SignOutErrorAction({error: error}));
          })
        );
    })
  );

  @Effect()
  logInSuccess$: Observable<any> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_SUCCESS),
    switchMap(action => {

      return this.authService.getUser(action['payload'].token).pipe(
        map(user => new GetUserInfoSuccessAction(user)),
        catchError(error => of(new GetUserInfoFailAction({error: error})))
      );
    })
  );

  @Effect()
  signUpSuccess$: Observable<any> = this.actions$.pipe(
    ofType(authActions.SIGN_UP_SUCCESS),
    switchMap(action => {

      return this.authService.getUser(action['payload'].token).pipe(
        map(user => new GetUserInfoSuccessAction(user)),
        catchError(error => of(new GetUserInfoFailAction({error: error})))
      );
    })
  );

  @Effect({ dispatch: false })
  signOutSuccess$: Observable<any> = this.actions$.pipe(
    ofType(authActions.SIGN_OUT_SUCCESS),
    tap(() => {
      this.authService.deleteToken();
    })
  );

  @Effect({ dispatch: false })
  logInFailure: Observable<any> = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE_ERROR),
    map(action => {
      return new AuthenticationErrorAction();
    }),
    catchError((error) => of(new AuthenticationErrorAction(error)))
  );

  @Effect() onFail$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.GET_USER_INFO_FAIL,
      authActions.AUTHENTICATE_ERROR,
      authActions.SIGN_UP_ERROR,
      authActions.SIGN_OUT_ERROR),
    map(error => console.log(error['payload'].error.error.error)),
    map(() => new SignOutAction())
  );

}
