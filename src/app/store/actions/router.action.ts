import { Action } from '@ngrx/store';

import { RouterStateUrl } from '../reducers';

export const ACTIVATE_SHOP: string = 'ACTIVATE_SHOP';
export const ACTIVATE_LOGIN: string = 'ACTIVATE_LOGIN';
export const ACTIVATE_REGISTER: string = 'ACTIVATE_REGISTER';

export class ActivateShop implements Action {
  readonly type: string = ACTIVATE_SHOP;

  constructor(public payload: RouterStateUrl) {}
}

export class ActivateLogin implements Action {
  readonly type: string = ACTIVATE_LOGIN;

  constructor(public payload: RouterStateUrl) {}
}

export class ActivateRegister implements Action {
  readonly type: string = ACTIVATE_REGISTER;

  constructor(public payload: RouterStateUrl) {}
}

export type RouterActions = ActivateShop | ActivateLogin | ActivateRegister;
