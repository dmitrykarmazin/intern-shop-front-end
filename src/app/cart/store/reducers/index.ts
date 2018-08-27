import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromItems from './products.reducer';

export interface ProductsState {
    products: fromItems.CartState
}

export const reducers: ActionReducerMap<ProductsState> = {
    products: fromItems.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>(
    'products'
);

export const getItemState = createSelector(
    getProductsState, 
    (state: ProductsState) => state.products
);

export const getAllItems = createSelector(getItemState, fromItems.getItems);
