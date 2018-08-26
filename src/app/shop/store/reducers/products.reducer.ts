import * as fromProducts from '../actions/products.action';
import { FiltersObject } from '../../../shared/models/filters.model';
import { Product } from '../../../shared/models/product.model';

export interface ProductsState {
  loading: boolean;
  loaded: boolean;
  products: Product[];
  viewMode: string; // 'grid' | 'list'
  currentFilters: FiltersObject;
}

export const initialState: ProductsState = {
  loading: false,
  loaded: false,
  products: [],
  viewMode: 'grid',
  currentFilters: {
    category: ''
  }
};

export function reducer(
  state = initialState,
  action: fromProducts.ProductsActions
): ProductsState {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromProducts.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default: return state;
  }
}

export const getProducts = (state: ProductsState) => state.products;
export const getProductsLoaded = (state: ProductsState) => state.loaded;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsViewMode = (state: ProductsState) => state.viewMode;
export const getProductsCurrentFilters = (state: ProductsState) => state.currentFilters;
