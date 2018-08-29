import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { NotificationService } from '../../shared/services/notification';
import * as notificationActions from '../actions/notification.action';
import { State } from '../../store/reducers';

@Injectable()
export class NotificationsEffects {
   constructor( private actions$: Actions, private service: NotificationService, private store: Store<State>) { }

    @Effect()
    notificate$: Observable<Action> = this.actions$
        .ofType(notificationActions.NOTIFICATION_NEW)
        .pipe(map((notification: notificationActions.AppNotificationTypes) => {
            const params: notificationActions.AppNotificationParams = notification.payload;
            setTimeout((): void => this.service.showNotification(
                params.message,
                params.isError,
                params.callbackMessage,
                params.callbackAction
            ), 0);

            return new notificationActions.AppNotificationToState (notification.payload);
        } ));
}
