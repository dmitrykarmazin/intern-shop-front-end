import * as fromRouter from '@ngrx/router-store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';

export class RouterStateUrl {
  constructor(
    public url: string,
    public queryParams: Params,
    public params: Params
  ) {}
}

export class CustomRouterSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let childRoute: ActivatedRouteSnapshot = routerState.root;
    while (childRoute.firstChild) {
      childRoute = childRoute.firstChild;
    }
    const url: string = childRoute.data['url'];
    const queryParams: Params = childRoute.data['queryParams'];
    const params: Params = childRoute.data['params'];

    return {
      url,
      queryParams,
      params
    };
  }
}

export class State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: any = {
  router: fromRouter.routerReducer
};

export const getRouterState: any = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');

export * from './router.reducer';
