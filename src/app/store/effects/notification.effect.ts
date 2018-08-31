import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { NotificationService } from '../../shared/services/notification';
import * as notificationActions from '../actions/notification.action';

@Injectable()
export class NotificationsEffects {
    constructor( private actions$: Actions, private service: NotificationService) { }

    @Effect()
    notificate$: Observable<Action> = this.actions$
        .pipe(ofType(notificationActions.NOTIFICATION_NEW))
        .pipe(
            switchMap((action: notificationActions.AppNotificationShow): any => {
                return this.service.showNotification(
                    action.payload.message,
                    action.payload.isError
                ).pipe(
                    map((payloadToDispatch: any) => new notificationActions.AppNotificationToState(payloadToDispatch))
                );
            })
        );
}
