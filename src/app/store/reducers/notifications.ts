import * as notificationActions from '../actions/notifications';

export interface NotificationState {
    message: string;
    timeLastNotification: Date;
    isError: boolean;
}

const initialState: NotificationState = {
    message: '',
    timeLastNotification: null,
    isError: false
};

export function notificationReducer
    (state: NotificationState = initialState, action: notificationActions.AppNotificationTypes): NotificationState {
        switch (action.type) {
            case notificationActions.NOTIFICATION_NEW:
                return {
                    message: action.payload,
                    timeLastNotification: new Date(),
                    isError: false
                };

            case notificationActions.NOTIFICATION_NEW_ERROR:
                return {
                    message: action.payload,
                    timeLastNotification: new Date(),
                    isError: true
                };

            default:
                return state;
        }
}

export function getNotificationMessage (state: NotificationState): string {
    return state.message;
}

export function getNotificationDate (state: NotificationState): Date {
    return state.timeLastNotification;
}

export function getNotificationIsError (state: NotificationState): boolean {
    return state.isError;
}
