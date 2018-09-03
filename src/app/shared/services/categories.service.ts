import { Category } from './../models/category.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.api_url}/categories`);
  }

  addCategory(category: any): Observable<{success: boolean}> {
    return this.http.post<any>(`${environment.api_url}/categories`, category);
  }
}
