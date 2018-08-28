import { Action } from '@ngrx/store';

export const NOTIFICATION_NEW: string = 'NOTIFICATION_NEW';
export const NOTIFICATION_NEW_ERROR: string = 'NOTIFICATION_NEW_ERROR';

export class AppNotification implements Action {
    type: string = NOTIFICATION_NEW;
    constructor ( public payload: string ) { }
}

export class AppNotificationError implements Action {
    type: string = NOTIFICATION_NEW_ERROR;
    constructor ( public payload: string ) { }
}

export type AppNotificationTypes =
  AppNotification
| AppNotificationError;
