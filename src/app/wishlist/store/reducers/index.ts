import { createFeatureSelector, ActionReducerMap, MemoizedSelector } from '@ngrx/store';

import * as fromWish from './wish.reducer';

export interface State {
    wish: fromWish.WishState;
}

export const reducers: ActionReducerMap<State> = {
    wish: fromWish.wishReducer
};

export const getState: MemoizedSelector<object, State> =
    createFeatureSelector<State>('wish');
