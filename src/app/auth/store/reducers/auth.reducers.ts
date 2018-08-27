import {User} from '../../models/user';
import { State } from '@ngrx/store';
import * as fromActions from '../actions/auth.actions';
import { Actions } from '../actions/auth.actions';

export interface AuthState  {
  currentUser: User | null;
  loading: boolean;
  loaded: boolean;
  isAuthorized: boolean;
  error?: string;
}

export const initialState: AuthState = {
  currentUser: null,
  loading: false,
  loaded: false,
  isAuthorized: false,
  error: null
};

export function reducer(state: AuthState = initialState, action: Actions): AuthState {

  switch (action.type) {
    case fromActions.AUTHENTICATE:
      return Object.assign({}, state, {
        loading: true
      });

    case fromActions.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        isAuthorized: false,
        loaded: true
      });

    case fromActions.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        isAuthorized: action.payload.authenticated,
        loaded: true,
        currentUser: action.payload.user
      });

    case fromActions.AUTHENTICATE_ERROR:
      return Object.assign({}, state, {
        isAuthorized: false,
        error: action.payload.error,
        loading: false
      });

    case fromActions.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        isAuthorized: false,
        error: action.payload.error.message,
        loading: false
      });

    case fromActions.AUTHENTICATE_SUCCESS:
      return <AuthState>{
        ...state,
        isAuthorized: true,
        loading: false,
        user: {
          token: action.payload.token
        },
        error: null
      };

    case fromActions.SIGN_UP_SUCCESS:
      const user: User = action.payload.user;

      // verify user is not null
      if (user === null) {
        return state;
      }

      return Object.assign({}, state, {
        isAuthorized: true,
        loading: false,
        user: {
          token: action.payload.token
        },
        error: null
      });

    case fromActions.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        isAuthorized: true,
        error: action.payload.error.message,
        currentUser: undefined
      });

    case fromActions.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthorized: false,
        error: undefined,
        currentUser: undefined
      });

    case fromActions.SIGN_UP:
      return Object.assign({}, state, {
        isAuthorized: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}

export const getIsAuthenticated: any = (state: AuthState): boolean => state.isAuthorized;
export const isAuthenticatedLoaded: any = (state: AuthState): boolean => state.loaded;
export const getAuthenticatedUser: any = (state: AuthState): any => state.currentUser;
export const getAuthenticationError: any = (state: AuthState): string => state.error;
export const getIsLoading: any = (state: AuthState): boolean => state.loading;

