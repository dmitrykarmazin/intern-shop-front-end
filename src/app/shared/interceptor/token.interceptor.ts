import { AuthState, getAuthenticatedUser } from './../../auth/store/reducers/auth.reducers';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { User } from './../../auth/models/user';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<AuthState>) {
    // env
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token');

    const reqAuth: HttpRequest<any> = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    req = token ? reqAuth : req;

    return next.handle(req);
  }
}
