import { AppNotificationShow } from './../../../store/actions/notification.action';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from '../../../shared/services';
import * as categoriesActions from '../actions/categories.action';
import { Action , Store} from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  constructor(
    private fromServices: fromServices.CategoriesService,
    private actions$: Actions,
    private store: Store<any>
  ) {}

  @Effect()
  loadCategories$: any = this.actions$.pipe(
    ofType(categoriesActions.LOAD_CATEGORIES),
    switchMap(() => {
      return this.fromServices
      .getCategories()
      .pipe(
        map((categories: any) => new categoriesActions.LoadCategoriesSuccess(categories['categories'])),
        catchError((error: Error) => of(new categoriesActions.LoadCategoriesFail(error)))
      );
    })
  );

  @Effect()
  addCategoty$: Observable<Action> = this.actions$.pipe(
      ofType(categoriesActions.ADD_CATEGORY),
      switchMap((action: categoriesActions.AddCategory) => {
        return this.fromServices
          .addCategory(action.payload).pipe(
          map((res: {success: boolean}) => {
              if (res.success) {
                this.store.dispatch(new categoriesActions.LoadCategories);

                return new categoriesActions.AddCategorySuccess();
              }
            }),
            catchError((error: Error) => of(new categoriesActions.AddCategoriesFail(error)))
          );
      })
  );

  @Effect()
  categoryAdded$: Observable<Action> = this.actions$.pipe(
    ofType(categoriesActions.ADD_CATEGORY_SUCCESS),
      map(() => new AppNotificationShow({
              message: `Category  added`,
              isError: false
      }))
  );

}
