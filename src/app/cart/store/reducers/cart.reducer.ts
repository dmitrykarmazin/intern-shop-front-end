
import { Product } from '../../../shared/models/product.model';
import * as fromCart from './../actions';
export interface CardItem {
    product: Product;
    quantity: number;
}
export interface CartState {
    isEmpty: boolean;
    products: CardItem[];
    totalCount: number;
    totalSum: string|number;
}

export const initialCartState: CartState = {
    isEmpty: true,
    products: [],
    totalCount: 0,
    totalSum: 0
};

export function cartReducer( state: CartState = initialCartState, action: fromCart.Actions): CartState {
    switch (action.type) {
        case fromCart.ADD_TO_CART: {
            const index: number = state.products.map((i: CardItem) => i.product.id).indexOf(action.payload.product.id);
            if (index >= 0) {
               const updated: CardItem[] = [
                    ...state.products.slice(0, index),
                    action.payload,
                    ...state.products.slice(index + 1)
                ];

                return {...state, products: updated };
            }

            return {...state, products: [...state.products, action.payload] };
        }
        default:
            return state;
    }
}
