import { AppNotificationShow } from './../../../store/actions/notification.action';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { map, switchMap, catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as fromServices from './../../../shared/services';
import * as productsActions from '../actions/products.action';
import { Product } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: fromServices.ProductsService
  ) {}

  @Effect()
  loadProducts$: any = this.actions$.pipe(
    ofType(productsActions.LOAD_PRODUCTS),
    switchMap(() => {
      return this.productsService
        .getProducts()
        .pipe(
          pluck('products'),
          map((response: Product[]) => {
            return new productsActions.LoadProductsSuccess(response);
          }),
          catchError((error: Error) => of(new productsActions.LoadProductsFail(error)))
        );
    })
  );

  @Effect()
  applyFilters$ = this.actions$.pipe(
      ofType(productsActions.APPLY_FILTERS),
      switchMap((action: productsActions.ApplyFilters) => {
        return this.productsService
          .getProducts(action['payload'])
          .pipe(
            pluck('products'),
            map((products: Product[]) => {
              return new productsActions.LoadProductsSuccess(products);
            }),
            catchError((error: Error) => of(new productsActions.LoadProductsFail(error)))
          );
      })
  );

  @Effect()
  addProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productsActions.ADD_PRODUCT_START),
    switchMap((action: productsActions.AddProductStart) => {
      return this.productsService
        .addProduct(action.payload)
        .pipe(
          pluck('product'),
          map((res: Product) => new productsActions.AddProductSuccess(res)),
          catchError((error: Error) => of(new productsActions.AddProductFail(error)))
        );
    })
  );

  @Effect()
  productAdded$: Observable<Action> = this.actions$.pipe(
    ofType(productsActions.ADD_PRODUCT_SUCCESS),
    map((action: productsActions.AddProductSuccess) => {
      return new AppNotificationShow({
        message: `Product name : "${action.payload.title}" added to base`,
        isError: false}
      );
    })
  );

}
