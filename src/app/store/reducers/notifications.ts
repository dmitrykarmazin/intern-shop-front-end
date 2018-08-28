import { AppNotification } from '../../notification/models/notification';
import * as notificationActions from '../actions/notifications';

export interface NotificationState {
    notification: any;
    timeLastNotification: Date;
}

const initialState: NotificationState = {
    notification: null,
    timeLastNotification: null
};

export function notificationReducer
    (state: NotificationState = initialState, action: notificationActions.AppNotificationTypes): NotificationState {
        switch (action.type) {
            case notificationActions.NOTIFICATION_NEW:
                return {
                    notification: action.payload,
                    timeLastNotification: new Date()
                };

            default:
                return state;
        }
}

export function getNotification (state: NotificationState): AppNotification {
    return state.notification;
}

export function getNotificationDate (state: NotificationState): Date {
    return state.timeLastNotification;
}
