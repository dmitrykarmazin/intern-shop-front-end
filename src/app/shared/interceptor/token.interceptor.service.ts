import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() {
    // env
  }

  token: string = localStorage.getItem('token');

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqAuth: HttpRequest<any> = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });

    req = this.token ? reqAuth : req;

    return next.handle(req);
  }
}
