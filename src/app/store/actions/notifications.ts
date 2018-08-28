import { Action } from '@ngrx/store';
import { AppNotification } from '../../notification/models/notification';

export const NOTIFICATION_NEW: string = 'NEW_NOTIFICATION';
export const NOTIFICATION_SELECTED: string = 'NOTIFICATION_SELECTED';

export class AppNotificationNew implements Action {
    type: string = NOTIFICATION_NEW;
    constructor ( public payload: AppNotification ) { }
}

export class AppNotificationSelected implements Action {
    type: string = NOTIFICATION_SELECTED;
    constructor ( public payload: Action ) { }
}

export type AppNotificationTypes =
  AppNotificationNew
| AppNotificationSelected;
