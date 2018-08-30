import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as cartActions from '../actions/cart.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AddToCart } from '../actions/cart.action';

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions) {}

  @Effect()
  signIn$: Observable<Action> = this.actions$.pipe(
    // ofType(AddToCart.ADD_TO_CART),
    // map(() => new )
  );

}