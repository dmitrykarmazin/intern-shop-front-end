import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/notifications';
import * as fromRootReducer from '../reducers';

export const getNotificationMessage: MemoizedSelector<object, string> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getNotificationMessage);
export const getNotificationDate: MemoizedSelector<object, Date> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getNotificationDate);
export const getNotificationIsError: MemoizedSelector<object, boolean> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getNotificationIsError);
