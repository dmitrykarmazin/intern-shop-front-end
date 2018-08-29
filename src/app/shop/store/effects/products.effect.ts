import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from './../../../shared/services';
import * as productsActions from '../actions/products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: fromServices.ProductsService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.ofType(productsActions.LOAD_PRODUCTS || productsActions.APPLY_FILTERS).pipe(
      switchMap((action: productsActions.LoadProducts | productsActions.ApplyFilters) => {
        debugger;

        return this.productsService
          .getProducts(action['payload'])
          .pipe(
            map(products => {

              return new productsActions.LoadProductsSuccess(products);
            }),
            catchError(error => of(new productsActions.LoadProductsFail(error)))
          )
      })
    )
}
