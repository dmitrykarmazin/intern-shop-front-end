
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers';

export const cartState: any = createFeatureSelector<CartState>('cart');

export const getTotal: any = createSelector(cartState, (state: CartState) => state.totalSum);

export const getTotalCount: any = createSelector(cartState, (state: CartState) => state.totalCount);

export const isEmpty: any = createSelector(cartState, (state: CartState) => state.isEmpty);

export const getCartList: any = createSelector(cartState, (state: CartState) => state.products);
