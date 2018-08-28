import { ActionReducerMap, createFeatureSelector, MemoizedSelector} from '@ngrx/store';

import * as fromNotification from './notifications';

export interface State {
    notification: fromNotification.NotificationState;
}

export const reducers: ActionReducerMap<State> = {
    notification: fromNotification.notificationReducer
};

export const getNotificationState: MemoizedSelector<object, State> = createFeatureSelector<State>('notification');
