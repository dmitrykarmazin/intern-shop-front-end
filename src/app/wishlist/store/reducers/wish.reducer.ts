import { Product } from '../../../shared/models/product.model';
import { Action } from '@ngrx/store';
import * as wishActions from '../actions/wish.action';

export interface WishState {
    ids: string [];
    products: {[id: string]: Product};
    isLoading: boolean;
    isLoaded: boolean;
    isLoadError: boolean;
}

// TODO - delete test data
const initialState: WishState = {
    ids: ['1', '2', '3'],
    products: {
        '1': { id: '1', thumbnail: '', title: 'Title1', description: 'Description1',
            category_id: '1', category_title: 'Mobile', price: '15000', stock: 38 },
        '2': { id: '2', thumbnail: '', title: 'Title2', description: 'Description2',
            category_id: '2', category_title: 'Mobile', price: '1500', stock: 64 },
        '3': { id: '3', thumbnail: '', title: 'Title', description: 'Description4',
            category_id: '4', category_title: 'Mobile', price: '13500', stock: 2 }
    },
    isLoading: false,
    isLoaded: false,
    isLoadError: false
};

export function wishReducer (state: WishState = initialState, action: any): WishState {
    switch (action.type) {

        case wishActions.WISH_ADD_NEW:
            if (state.ids.indexOf(action.payload.id) === -1) {
                state.ids.push(action.payload.id);
                state.products[action.payload.id] = action.payload;

                return {...state};
            }

            return state;

        case wishActions.WISH_REMOVE_PRODUCT:
            const index: number = state.ids.indexOf(action.payload.id);
            if (index !== -1) {
                state.ids.splice(action.payload.id);
                delete state.products[action.payload.id];

                return {...state};
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
            return {...state,
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
