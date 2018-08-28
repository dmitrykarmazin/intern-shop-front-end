import { Action } from '@ngrx/store';

export enum AppNotificationType {
    Notification,
    Error
}

export class AppNotification {
    messageDescription: string;
    messageAction: string;
    type: AppNotificationType;
    selectAction: Action;
}
