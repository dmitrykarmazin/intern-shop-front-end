
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';

export const cartState: any = createFeatureSelector<CartState>('cart');

export const getTotal: any = createSelector(cartState, (state: CartState) => state.total);

export const getCartList: any = createSelector(cartState, (state: CartState) => state.products);
