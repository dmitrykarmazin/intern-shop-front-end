import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getShopState, ShopState } from '../reducers';
import * as fromCategories from '../reducers/categories.reducer';

export const getCategories: MemoizedSelector<{}, fromCategories.CategoriesState> = createSelector (
  getShopState,
  (state: ShopState) => state.categories
);

export const getAllCategories: MemoizedSelector<{}, {}> = createSelector (
  getCategories,
  fromCategories.getCategories
);

export const getIsCategoriesLoading: MemoizedSelector<{}, {}> = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoading
);

export const getIsCategoriesLoaded: MemoizedSelector<{}, {}> = createSelector (
  getCategories,
  fromCategories.getCategoriesIsLoaded
);
