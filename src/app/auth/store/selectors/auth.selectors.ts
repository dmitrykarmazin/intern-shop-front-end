import {
  ActionReducer, ActionReducerMap, combineReducers, compose, createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as users from '../reducers/auth.reducers';


export interface State {
  users: users.AuthState;
}

// const reducers = {
//   users: users.reducer
// };

// // development reducer includes storeFreeze to prevent state from being mutated
// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
//
// // production reducer
// const productionReducer: ActionReducer<State> = combineReducers(reducers);

export const reducers: ActionReducerMap<State> = {
  users: users.reducer
};
export const getAuthFeatureState = createFeatureSelector<State>('auth');

export const getAuthState = createSelector(
  getAuthFeatureState,
  (state) => state.users
)
// export const getUsersState = (state: State) => state.users;

export const getAuthenticatedUser = createSelector(getAuthState, users.getAuthenticatedUser);
export const getIsAuthenticated = createSelector(getAuthState, (state) => {
  debugger
  return state.users.isAuthorized;
});
export const isAuthenticatedLoaded = createSelector(getAuthState, users.isAuthenticatedLoaded);
export const isAuthenticationLoading = createSelector(getAuthState, users.getIsLoading);
export const getAuthenticationError = createSelector(getAuthState, users.getAuthenticationError);
