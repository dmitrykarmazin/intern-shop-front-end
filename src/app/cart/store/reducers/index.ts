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

export const getItemState: any = createSelector(
    getProductsState, 
    (state: ProductsState) => state.products
);

<<<<<<< HEAD
export const getAllItems = createSelector(getItemState, fromItems.getItems);
=======
export const getAllItems: any = createSelector(getItemState, fromItems.getItems);
>>>>>>> Create store in cart module
