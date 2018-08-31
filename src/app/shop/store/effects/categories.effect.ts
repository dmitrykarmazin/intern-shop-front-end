import { AppNotificationShow } from './../../../store/actions/notification.action';
import { Category } from './../../../shared/models/category.model';
import { AddCategorySuccess } from './../actions/categories.action';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from '../../../shared/services';
import * as categoriesActions from '../actions/categories.action';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  constructor(
    private fromServices: fromServices.CategoriesService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCategories$ = this.actions$.ofType(categoriesActions.LOAD_CATEGORIES).pipe(
    switchMap(() => {
      return this.fromServices
      .getCategories()
      .pipe(
        map(categories => new categoriesActions.LoadCategoriesSuccess(categories['categories'])),
        catchError(error => of(new categoriesActions.LoadCategoriesFail(error)))
      )
    })
  )

  @Effect()
  addCategoty$: Observable<Action> = this.actions$.pipe(
      ofType(categoriesActions.ADD_CATEGORY),
      switchMap((action: categoriesActions.AddCategory) => {
        return this.fromServices
          .addCategory(action.payload).pipe(
            map((res: { success: string, categoty?: Category, error?: Error}) => {
              if (res.success) {
                return of( new categoriesActions.AddCategorySuccess(res.categoty)).pipe(
                  map((ac: categoriesActions.AddCategorySuccess) => of(new AppNotificationShow({
                    message: `Category ${ac.payload['title']} added`,
                    isError: false
                  })))
                );
              }
            }),
            catchError((error: Error) => of(new categoriesActions.AddCategoriesFail(error)))
        );
      })
    );
}
