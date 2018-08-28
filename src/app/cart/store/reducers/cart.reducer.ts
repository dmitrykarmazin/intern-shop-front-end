
import { Product } from '../../../shared/models/product.model';
import * as fromCart from './../actions';
export interface CardItem {
    product: Product;
    quantity: number;
}
export interface CartState {
    isEmpty: boolean;
    ids: string[];
    products: { [id: string]: CardItem };
    totalCount: number;
    totalSum: number;
}

export const initialCartState: CartState = {
    isEmpty: true,
    ids: [],
    products: {},
    totalCount: 0,
    totalSum: 0
};

export function reducer( state: CartState = initialCartState, action: fromCart.Actions): CartState {
    switch (action.type) {
        case fromCart.ADD_TO_CART: {
            const id: string = action.payload.product.id;
            const prevQuantity: number = state.products[id] ? state.products[id].quantity : 0;
            const newQuantity: number = prevQuantity + action.payload.quantity;

            const additionalSum: number = action.payload.quantity * Number(action.payload.product.price);

            return {
                ...state,
                products: {
                    [id]: {
                        ...state.products[id],
                        product: action.payload.product,
                        quantity: newQuantity
                    }
                },
                totalCount: state.totalCount + action.payload.quantity,
                totalSum: state.totalSum + additionalSum
            };
        }
        default:
            return state;
    }
}
