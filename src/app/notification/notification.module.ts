import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material/material.module';
import { NotificationComponent } from './containers/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('shop', { /* reducer */ }),
    EffectsModule.forFeature([]),
  ],
  declarations: [
    NotificationComponent
  ]
})
export class NotificationModule { }
