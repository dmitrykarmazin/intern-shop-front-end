import { Action } from '@ngrx/store';
import { Category } from '../../../shared/models/category.model';

export const LOAD_CATEGORIES = '[Categories] Load Categories';
export const LOAD_CATEGORIES_FAIL = '[Categories] Load Categories Fail';
export const LOAD_CATEGORIES_SUCCESS = '[Categories] Load Categories Success';
export const ADD_CATEGORY = '[Categories] Add Category fetch';
export const ADD_CATEGORY_FAIL = '[Categories] Add Categoty Fail';
export const ADD_CATEGORY_SUCCESS = '[Categories] Add Category Success';

export class LoadCategories implements Action {
  readonly type: string = LOAD_CATEGORIES;
}

export class LoadCategoriesSuccess implements Action {
  readonly type: string = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) { }
}

export class LoadCategoriesFail implements Action {
  readonly type: string = LOAD_CATEGORIES_FAIL;
  constructor(public payload: any) { }
}



export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public payload: Category) { }
}

export class AddCategorySuccess implements Action {
  readonly type = ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) { }
}

export class AddCategoriesFail implements Action {
  readonly type = ADD_CATEGORY_FAIL;
  constructor(public payload: Error) { }
}

export type CategoryActions = LoadCategories
  | LoadCategoriesSuccess
  | LoadCategoriesFail
  | AddCategory
  | AddCategorySuccess
  | AddCategoriesFail;
