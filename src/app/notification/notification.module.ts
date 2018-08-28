import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { NotificationComponent } from './containers/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
