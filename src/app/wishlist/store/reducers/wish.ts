import { Product } from '../../../shared/models/product.model';

export interface WishState {
    ids: number [];
    products: {[id: number]: Product};
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

export function wishReducer (state: WishState, action:)