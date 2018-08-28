import {Action} from '@ngrx/store';
import { CartItem } from './../reducers/cart.reducer';

export const ADD_TO_CART: string = '[ADD] product to cart';

export class AddToCart implements Action {
    readonly type: string = ADD_TO_CART;
    constructor(public payload: CartItem) {
    }
}

export type Actions = AddToCart;