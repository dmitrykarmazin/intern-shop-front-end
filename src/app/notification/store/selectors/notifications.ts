import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/notifications';
import * as fromRootReducer from '../reducers';
import { AppNotification } from '../../models/notification';

const getNotificationState: MemoizedSelector<object, fromReducer.NotificationState> =
    createSelector(fromRootReducer.getNotificationState, (state: fromRootReducer.State) => state.notification);

export const getNotification: MemoizedSelector<object, AppNotification> =
    createSelector(getNotificationState, fromReducer.getNotification);
export const getNotificationDate: MemoizedSelector<object, Date> =
    createSelector(getNotificationState, fromReducer.getNotificationDate);
