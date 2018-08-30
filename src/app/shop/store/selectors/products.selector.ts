import { ShopState, getShopState } from './../reducers';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/products.reducer';

export const getProducts: MemoizedSelector<{}, fromProducts.ProductsState> = createSelector(
  getShopState,
  (state: ShopState) => state.products
);

export const getAllProducts: MemoizedSelector<{}, {}> = createSelector(
  getProducts,
  fromProducts.getProducts
);

export const getProductsLoaded: MemoizedSelector<{}, {}> = createSelector(
  getProducts,
  fromProducts.getProductsLoaded
);

export const getProductsLoading: MemoizedSelector<{}, {}> = createSelector(
  getProducts,
  fromProducts.getProductsLoading
);

export const getProductsViewMode: MemoizedSelector<{}, {}> = createSelector(
  getProducts,
  fromProducts.getProductsViewMode
);

export const getProductsCurrentFilters: MemoizedSelector<{}, {}> = createSelector(
  getProducts,
  fromProducts.getProductsFilters
);
