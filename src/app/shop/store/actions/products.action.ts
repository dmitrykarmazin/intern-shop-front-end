import { FiltersObject } from './../../../shared/models/filters.model';
import { Action } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';
export const APPLY_FILTERS = '[Products] Apply Filters For Products';
export const CHANGE_VIEW_MODE = '[Products] Change View Mode For Products List';
export const ADD_PRODUCT_START = '[Products] Product is fetching';
export const ADD_PRODUCT_SUCCESS = '[Products] Product was added';
export const ADD_PRODUCT_FAIL = '[Products] Product add fail';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) { }
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class ApplyFilters implements Action {
  readonly type = APPLY_FILTERS;
  constructor(public payload: FiltersObject) { }
}

export class ChangeViewMode implements Action {
  readonly type = CHANGE_VIEW_MODE;
  constructor(public payload: string) { }
}

export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class AddProductFail implements Action {
  readonly type = ADD_PRODUCT_FAIL;
  constructor(public payload: Error) { }
}

export class AddProductStart implements Action {
  readonly type = ADD_PRODUCT_START;
  constructor(public payload: any) { }
}

export type ProductsActions = LoadProducts |
   LoadProductsFail
 | LoadProductsSuccess
 | ApplyFilters
 | ChangeViewMode
 | AddProductStart
 | AddProductSuccess
 | AddProductFail;
