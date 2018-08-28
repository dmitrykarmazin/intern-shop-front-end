import { Product } from '../../../shared/models/product.model';

export interface WishStore {
    ids: number [];
    products: {[id: number]: Product};
    isLoading: boolean;
    isLoaded: boolean;
    isLoadError: boolean;
}

const initialState: WishStore = {
    ids: [],
    products: {},
    isLoading: false,
    isLoaded: false,
    isLoadError: false
};
