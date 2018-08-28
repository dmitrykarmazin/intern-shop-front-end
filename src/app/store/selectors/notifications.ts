import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/notifications';
import * as fromRootReducer from '../reducers';
import { AppNotification } from '../../notification/models/notification';

export const getNotification: MemoizedSelector<object, AppNotification> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getNotification);
export const getNotificationDate: MemoizedSelector<object, Date> =
    createSelector(fromRootReducer.getNotificationState, fromReducer.getNotificationDate);
