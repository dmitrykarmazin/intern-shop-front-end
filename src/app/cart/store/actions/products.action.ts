import { Action } from '@ngrx/store';

export const LOAD_PRODUCTS = '[Products] Load Products';

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;
}

export type ProductsAction = LoadProducts