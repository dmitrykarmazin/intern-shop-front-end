import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const AUTHENTICATE: string = '[users] AUTHENTICATE';
export const AUTHENTICATE_ERROR: string = '[users] AUTHENTICATE_ERROR';
export const AUTHENTICATE_SUCCESS: string = '[users] AUTHENTICATE_SUCCESS';
export const AUTHENTICATED: string = '[users] AUTHENTICATED';
export const AUTHENTICATED_ERROR: string = '[users] AUTHENTICATED_ERROR';
export const AUTHENTICATED_SUCCESS: string = '[users] AUTHENTICATED_SUCCESS';
export const SIGN_OUT: string = '[users] SIGN_OUT';
export const SIGN_OUT_ERROR: string = '[users] SIGN_OUT_ERROR';
export const SIGN_OUT_SUCCESS: string = '[users] SIGN_OUT_SUCCESS';
export const SIGN_UP: string = '[users] SIGN_UP';
export const SIGN_UP_ERROR: string = '[users] SIGN_UP_ERROR';
export const SIGN_UP_SUCCESS: string = '[users] SIGN_UP_SUCCESS';

export class AuthenticateAction implements Action {
  readonly type: string = AUTHENTICATE;

  constructor(public payload: {login: string, password: string}) {}
}

export class AuthenticatedAction implements Action {
  readonly type: string = AUTHENTICATED;

  constructor(public payload: {authenticated: boolean, user: User}) {}
}

export class AuthenticatedSuccessAction implements Action {
  readonly type: string = AUTHENTICATED_SUCCESS;

  constructor(public payload: {authenticated: boolean, user: User}) {}
}

export class AuthenticatedErrorAction implements Action {
  readonly type: string = AUTHENTICATED_ERROR;

  constructor(public payload?: any) {}
}

export class AuthenticationErrorAction implements Action {
  readonly type: string = AUTHENTICATE_ERROR;

  constructor(public payload?: any) {
    console.log(payload);
  }
}

export class AuthenticationSuccessAction implements Action {
  readonly type: string = AUTHENTICATE_SUCCESS;

  constructor(public payload: any) {}
}

export class SignOutAction implements Action {
  readonly type: string = SIGN_OUT;

  constructor(public payload?: any) {}
}

export class SignOutSuccessAction implements Action {
  readonly type: string = SIGN_OUT_SUCCESS;

  constructor(public payload?: any) {}
}

export class SignOutErrorAction implements Action {
  readonly type: string = SIGN_OUT_ERROR;

  constructor(public payload?: any) {}
}

export class SignUpAction implements Action {
  readonly type: string = SIGN_UP;

  constructor(public payload: {login: string, password: string}) {}
}

export class SignUpErrorAction implements Action {
  readonly type: string = SIGN_UP_ERROR;

  constructor(public payload?: any) {}
}

export class SignUpSuccessAction implements Action {
  readonly type: string = SIGN_UP_SUCCESS;

  constructor(public payload: any) {}
}

export type Actions = AuthenticateAction | AuthenticatedAction | AuthenticatedErrorAction | AuthenticatedSuccessAction
  | AuthenticationErrorAction | AuthenticationSuccessAction | SignUpAction | SignUpErrorAction | SignUpSuccessAction;
