import { Action } from '@ngrx/store';

export const AUTHENTICATE: string = '[AUTH] Authenticate';
export const AUTHENTICATE_ERROR: string = '[AUTH] Authenticate Error';
export const AUTHENTICATE_SUCCESS: string = '[AUTH] Authenticate Success';
export const SIGN_OUT: string = '[AUTH] Sign Out';
export const SIGN_OUT_ERROR: string = '[AUTH] Sign Out Error';
export const SIGN_OUT_SUCCESS: string = '[AUTH] Sign Out Success';
export const SIGN_UP: string = '[AUTH] Sign Up';
export const SIGN_UP_ERROR: string = '[AUTH] Sign Up Error';
export const SIGN_UP_SUCCESS: string = '[AUTH] Sign Up Success';
export const GET_USER_INFO: string = '[AUTH] Get User Info';
export const GET_USER_INFO_SUCCESS: string  = '[AUTH] Get User Info Success';
export const GET_USER_INFO_FAIL: string = '[AUTH] Get User Info Fail';

export class AuthenticateAction implements Action {
  readonly type: string = AUTHENTICATE;

  constructor(public payload: {login: string, password: string}) {}
}

export class AuthenticationErrorAction implements Action {
  readonly type: string = AUTHENTICATE_ERROR;

  constructor(public payload?: any) {}
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

export class GetUserInfoAction implements Action {
  readonly type: string = GET_USER_INFO;

  constructor(public payload: any) { }
}

export class GetUserInfoSuccessAction implements Action {
  readonly type: string = GET_USER_INFO_SUCCESS;

  constructor(public payload: any) { }
}

export class GetUserInfoFailAction implements Action {
  readonly type: string = GET_USER_INFO_FAIL;

  constructor(public payload: any) { }
}

export type Actions = AuthenticateAction | AuthenticationErrorAction | AuthenticationSuccessAction
  | SignUpAction | SignUpErrorAction | SignUpSuccessAction
  | GetUserInfoAction | GetUserInfoSuccessAction | GetUserInfoFailAction;
