import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { AppNotification, AppNotificationError, AppNotificationTypes } from '../../store/actions/notifications';
import { State } from '../../store/reducers';

@Injectable()
export class NotificationService {

    private barConfig: MatSnackBarConfig = {
        duration: 5000
    };

    constructor( private store: Store<State>, public snackBar: MatSnackBar) { }

    public showNotification (message: string = '', isError: boolean = false): void {

              this.snackBar.open(
                message,
                '',
                this.barConfig
              );

              const action: AppNotificationTypes =
                isError ? (new AppNotificationError(message)) : (new AppNotification(message));

              this.store.dispatch(action);
    }
}
