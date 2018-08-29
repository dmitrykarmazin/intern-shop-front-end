import { switchMap, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {

  constructor() {
    // env
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> {
    return next.handle(req).pipe(
      switchMap((res: Observable<HttpEvent<any>>) => {
        return res.pipe(
          tap((ev: HttpEvent<any>) => {
            if ( ev instanceof HttpResponse) {
              return ev;
            }
          })
        );
      }),
      catchError((res: HttpErrorResponse) => this.errorHandle(res))
    );
  }
  private errorHandle(err: HttpErrorResponse): any {
    // todo
  }
}
