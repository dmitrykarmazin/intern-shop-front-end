import { Product } from '../../../shared/models/product.model';
import * as wishActions from '../actions/wish.action';

export interface WishState {
    ids: string [];
    products: {[id: string]: Product};
    isLoading: boolean;
    isLoaded: boolean;
    isLoadError: boolean;
}

const initialState: WishState = {
    ids: [],
    products: {},
    isLoading: false,
    isLoaded: false,
    isLoadError: false
};

export function wishReducer (state: WishState = initialState, action: any): WishState {
    switch (action.type) {

        case wishActions.WISH_ADD_NEW_SUCCESS:
            if (state.ids.indexOf(action.payload.id) === -1) {
                state.ids.push(action.payload.id);
                state.products[action.payload.id] = action.payload;

                return {...state,
                    ids: state.ids.slice(),
                    products: {...state.products}
                };
            }

            return state;

        case wishActions.WISH_REMOVE_PRODUCT_SUCCESS:
            const index: number = state.ids.indexOf(action.payload);
            if (index !== -1) {
                state.ids.splice(index, 1);
                delete state.products[action.payload];

                return {...state,
                    ids: state.ids.slice(),
                    products: {...state.products}
                };
            }

            return state;

        case wishActions.WISH_DOWNLOAD_OK:
            const ids: string[] = [];
            const products: {[id: string]: Product} = {};

            action.payload.map((product: Product) => {
                ids.push(product.id);
                products[product.id] = product;
            });

            return {
                ids,
                products,
                isLoading: false,
                isLoaded: true,
                isLoadError: false
            };

        case wishActions.WISH_START_DOWNLOAD:
            return {...state,
                isLoading: true,
                isLoaded: false,
                isLoadError: false
            };

        case wishActions.WISH_DOWNLOAD_ERROR:
            return {
                ids: [],
                products: {},
                isLoading: false,
                isLoaded: false,
                isLoadError: true
            };

        default:
            return state;
    }
}

export function getWishIds (state: WishState): string[] {
    return state.ids;
}

export function getWishProducts (state: WishState): {[id: string]: Product} {
    return state.products;
}

export function getWishIsLoading (state: WishState): boolean {
    return state.isLoading;
}

export function getWishIsLoaded (state: WishState): boolean {
    return state.isLoaded;
}

export function getWishIsLoadError (state: WishState): boolean {
    return state.isLoadError;
}
