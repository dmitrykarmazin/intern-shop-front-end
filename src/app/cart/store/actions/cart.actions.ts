import {Action} from '@ngrx/store';
import { CardItem } from './../reducers';

export const ADD_TO_CART: string = '[ADD] product to cart';

export class AddToCart implements Action {
    readonly type: string = ADD_TO_CART;
    constructor(public payload: CardItem) {
    }
}

export type Actions = AddToCart;
