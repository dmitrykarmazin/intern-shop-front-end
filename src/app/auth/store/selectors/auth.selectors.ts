import { createSelector } from '@ngrx/store';
import * as users from '../reducers/auth.reducers';
import {getAuthFeatureState, State} from '../reducers';

export const getAuthState = createSelector(
  getAuthFeatureState,
  (state: State) => state.users
);

export const getAuthenticatedUser = createSelector(getAuthFeatureState, users.getAuthenticatedUser);
export const getIsAuthenticated = createSelector(getAuthFeatureState, (state) => state.users.isAuthorized);
export const getIsAuthenticatedLoaded = createSelector(getAuthFeatureState, users.getIsAuthenticatedLoaded);
export const getIsAuthenticationLoading = createSelector(getAuthFeatureState, users.getIsLoading);
export const getAuthenticationError = createSelector(getAuthFeatureState, users.getAuthenticationError);
