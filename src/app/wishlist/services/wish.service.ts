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
      'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViODc5OGVhNzc3Zjk4MjEzM2I0NGY3ZiIsImxvZ2luIjoicXFxcXFxcXEiLCJwYXNzd29yZCI6IiQyYiQxMiQuejIyTnNQemtWT2NaN3B0Ui5maXMuZmJQREdSZzZ3OEw4WDJMc0RhTTIvUm1oUVFmdFkybSIsImlhdCI6MTUzNTYzODU1MCwiZXhwIjoxNTM1NjQxMjUwfQ.YcYUVpCUNijMRNZSrOI_SES1JLN-bodwlhlxdthEfDw`
    })
  };

  private serverUrl: string = environment.api_url;

  constructor( private http: HttpClient ) { }

  public getWishes (user: any): Observable<Product[]> {

    return this.http.get<Product[]>(`${this.serverUrl}/wishlists/${user.id}`, this.httpOptions)
    .pipe(
      map((data: any) => {

        return data.products;
      }));
  }

  public createWishList (user: User, products: Product[]): Observable<boolean> {
    const body: any = {
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
