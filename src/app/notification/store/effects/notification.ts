import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as notificationActions from '../actions/notifications';
import { AppNotification } from '../../models/notification';

@Injectable()
export class NotificationsEffects {
   constructor( private actions$: Actions) { }

    @Effect()
    selected$: Observable<Action> = this.actions$
        .ofType(notificationActions.NOTIFICATION_SELECTED)
        .pipe(map((notification: AppNotification) => notification.selectAction ));
}
