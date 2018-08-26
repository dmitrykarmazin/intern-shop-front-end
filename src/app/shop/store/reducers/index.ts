import * as fromProducts from './products.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ProductsState {
  products: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  products: fromProducts.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
