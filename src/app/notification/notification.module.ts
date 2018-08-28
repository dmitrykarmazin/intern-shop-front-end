import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material/material.module';
import { NotificationComponent } from './containers/notification/notification.component';
import { reducers } from './store/reducers';
import { NotificationsEffects } from './store/effects/notification';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('notification', reducers ),
    EffectsModule.forFeature([NotificationsEffects]),
  ],
  declarations: [
    NotificationComponent
  ]
})
export class NotificationModule { }
