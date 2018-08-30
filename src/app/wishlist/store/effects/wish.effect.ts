import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of, zip } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { State } from '../reducers';
import { Product } from 'src/app/shared/models/product.model';
import * as wishActions from '../actions/wish.action';
import { WishService } from '../../services/wish.service';
import * as wishSelectors from '../selectors/wish.selector';
import { User } from 'src/app/auth/models/user';
import { getAuthenticatedUser } from 'src/app/auth/store/selectors';
import { SIGN_UP, SIGN_OUT, SignUpAction, GET_USER_INFO_SUCCESS } from 'src/app/auth/store/actions/auth.actions';
import { AppNotificationShow } from 'src/app/store/actions/notification.action';
import { productToArray } from 'src/app/shared/utils/productsToArray';

@Injectable()
export class WishEffects {

    private userInfo: User;

    constructor( private actions$: Actions, private dataService: WishService , private store: Store<State>) {
        this.store.select(getAuthenticatedUser).subscribe((user: User) => this.userInfo = user);
    }

    /*
    @Effect()
    serverError$: Observable<Action> = this.actions$
        .ofType(wishActions.WISH_DOWNLOAD_ERROR)
        .pipe(
            switchMap((action: wishActions.WishDownloadError): any => {
                of(new AppNotificationShow({message: action.payload.message, isError: true}));
            }
        )
    );

    @Effect()
    userAuth$: Observable<Action> = this.actions$
        .ofType(wishActions.WISH_ADD_NEW)
        .pipe(
            switchMap((action: wishActions.WishAddNew): any => {
                return this.dataService.updateWishes(this.userInfo).pipe(
                    catchError((err: Error) => of(new AppNotificationShow({message: err.message, isError: true})))
                );
            })
        );
    */

    @Effect()
    userAuth$: Observable<Action> = this.actions$
        .ofType(wishActions.WISH_ADD_NEW)
        .pipe(
            switchMap((action: wishActions.WishAddNew): any => {
                return zip(
                    this.store.select(wishSelectors.getWishProducts),
                    this.store.select(getAuthenticatedUser)
                ).pipe(
                    switchMap((data: any) => {
                        if (data[1] !== null) {
                            return this.saveWishlist(data, action.payload);
                        }

                        return of(new AppNotificationShow({message: 'You should log in', isError: true}));
                    }),
                    catchError((err: Error) => of(new AppNotificationShow({message: err.message, isError: true})))
                );
            })
        );

    private function saveWishlist(data: any, product: Product): Observable<any> {
        return this.dataService.updateWishes(data[1], productToArray(data[0]))
            .pipe(
                map((success: boolean) => {
                    if (success) {
                        return new wishActions.WishAddNewSuccess(product);
                    }

                    return new AppNotificationShow({message: 'Server error', isError: true});
                }),
                catchError((err: Error) => {
                    return this.dataService.createWishList(data[1], productToArray(data[0]))
                        .pipe(
                            map((products: Product[]) => new wishActions.WishDownloadDone(products)),
                            catchError((err2: Error) => of(new AppNotificationShow({message: err2.message, isError: true})))
                        );
                    )

            );
    }

    @Effect()
    getWishes$: Observable<Action> = this.actions$
        .ofType(GET_USER_INFO_SUCCESS)
        .pipe(
            switchMap((action: SignUpAction): any => {
                return this.dataService.getWishes (action.payload).pipe(
                    map((products: Product[]) => new wishActions.WishDownloadDone(products)),
                    catchError((err: Error) => of())
                );
            })
        );

}
