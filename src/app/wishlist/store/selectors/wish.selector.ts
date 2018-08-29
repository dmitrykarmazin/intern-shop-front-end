import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/wish.reducer';
import * as fromRootReducer from '../reducers';
import { Product } from 'src/app/shared/models/product.model';

const getWishState: MemoizedSelector<object, fromReducer.WishState> =
    createSelector (fromRootReducer.getState, (state: fromRootReducer.State) => state.wish);

export const getWishIds: MemoizedSelector<object, string[]> =
    createSelector (getWishState, fromReducer.getWishIds);
export const getWishIsLoading: MemoizedSelector<object, boolean> =
    createSelector (getWishState, fromReducer.getWishIsLoading);
export const getWishIsLoaded: MemoizedSelector<object, boolean> =
    createSelector (getWishState, fromReducer.getWishIsLoaded);
export const getWishIsLoadError: MemoizedSelector<object, boolean> =
    createSelector (getWishState, fromReducer.getWishIsLoadError);

export const getWishProductsInObject: MemoizedSelector<object, {[id: string]: Product}> =
    createSelector (getWishState, fromReducer.getWishProducts);

export const getWishProducts: MemoizedSelector<object, Product[]> =
    createSelector(getWishIds, getWishProductsInObject, (ids: string[], products: {[id: string]: Product}) => {
        return ids.map((id: string) => products[id] );
});
export const getWishCount: MemoizedSelector<object, number> =
    createSelector(getWishIds, (ids: string[]) => ids.length);
