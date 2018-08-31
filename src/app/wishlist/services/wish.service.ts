import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/shared/models/product.model';
import { User } from 'src/app/auth/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private httpOptions: any = {
    // TODO - delete
    headers: new HttpHeaders({
      'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InJycnJycnJyIiwicGFzc3dvcmQiOiIkMmIkMTIkNjVydFB5MnVManRzSGlOUENRU0x1T3hpZTB6cWhWVVMycE9ucHRBNGIyUklnQnNwN1F4ckciLCJfaWQiOiI1Yjg4ZmMzN2NmYWU1NTE2NmM4Njg2YTQiLCJpZCI6IjViODhmYzM3Y2ZhZTU1MTY2Yzg2ODZhNCIsImlhdCI6MTUzNTcwNDExOSwiZXhwIjoxNTM1NzA2ODE5fQ.p0RIfDaEdiuljgFRJwP3lPohSYYMdlp1ufoa9b5l1KQ`
    })
  };

  private serverUrl: string = environment.api_url;

  constructor( private http: HttpClient ) { }

  public getWishes (user: any): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.serverUrl}/wishlists/${user.id}`, this.httpOptions)
    .pipe(
      map((data: any) => {
        if (data.success) {
          return data.wishlist.items;
        }

        return new Error('Connection Error');
      }));
  }

  public createWishList (user: User, products: Product[]): Observable<boolean> {
    const body: any = {
      'id': user.id,
      client: {
          'id': user.id,
          'login': user.login,
          'password': user.password
      },
      items: products
    };

    return this.http.post<Product[]>(`${this.serverUrl}/wishlists`, body, this.httpOptions)
    .pipe(
      map((data: any) => {

        return data;
      }));
  }

  public updateWishes (user: User, products: Product[]): Observable<boolean> {

    const body: any = {
      client: {
          'id': user.id,
          'login': user.login,
          'password': user.password
      },
      items: products
    };

    return this.http.put<Product[]>(`${this.serverUrl}/wishlists/${user.id}`, body, this.httpOptions)
    .pipe(
      map((data: any) => {

        return data.success;
      }));
  }

}
