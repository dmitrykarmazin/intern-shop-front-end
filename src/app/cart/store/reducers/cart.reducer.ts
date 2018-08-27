
import { Product } from '../../../shared/models/product.model';
import * as fromCart from './../actions/cart.actions';
export interface CardItem {
    product: Product;
    quantity: number;
}
export interface CartState {
    products: CardItem[];
    total: number;
}

export const initialCartState: CartState = {
    products: [],
    total: 0
};

export function cartReducer( state: CartState = initialCartState, action: fromCart.Actions): CartState {
    switch (action.type) {
        case fromCart.ADD_TO_CART: {
            const products: CardItem[] = [...state.products, action.payload];

            return {...state, products: products };
        }
        default:
            return state;
    }
}
