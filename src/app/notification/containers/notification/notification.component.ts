import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import { State } from '../../../store/reducers';
import { AppNotification, AppNotificationType } from '../../models/notification';
import { getNotification } from '../../../store/selectors/notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent {

  private snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  private barConfig: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['app-snack-normal']
  };

  private barConfigError: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['app-snack-error']
  };

  constructor( private store: Store<State>, public snackBar: MatSnackBar) {

    this.store.select(getNotification).subscribe((data: AppNotification) => {

      if (data !== null) {
        const config: MatSnackBarConfig = data.type === AppNotificationType.Notification ? this.barConfig : this.barConfigError;

        this.snackBarRef = this.snackBar.open(
          data.messageDescription,
          data.messageAction,
          config
        );

        this.snackBarRef.onAction().subscribe(() => {
          if (data.selectAction) {
            this.store.dispatch(data.selectAction);
          }
        });
      }
    });
  }

}
