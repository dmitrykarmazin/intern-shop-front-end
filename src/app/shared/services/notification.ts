import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { AppNotificationTypes } from '../../store/actions/notification.action';
import { State } from '../../store/reducers';

@Injectable()
export class NotificationService {

    private barConfig: MatSnackBarConfig = {
      duration: 5000,
      panelClass: 'app-notification-text'
    };

    private barConfigError: MatSnackBarConfig = {
      duration: 5000,
      panelClass: 'app-notification-text-error'
    };

    private snackBarRef: MatSnackBarRef<SimpleSnackBar>;

    constructor( private store: Store<State>, public snackBar: MatSnackBar) { }

    public showNotification (
      message: string = '',
      isError: boolean = false,
      actionText: string = '',
      clickAction: Action = null
    ): void {

      const config: MatSnackBarConfig = isError ? this.barConfigError : this.barConfig;

        this.snackBarRef = this.snackBar.open(
          message,
          actionText,
          config
        );

        if (clickAction !== null) {
          this.snackBarRef.onAction().subscribe(() => {
            this.store.dispatch(clickAction);
          });
        }
    }
}
