import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import Product from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() viewMode$: Observable<string>;
  @Input() products$: Observable<Product[]>;

  private isListType: boolean = false;

  constructor() {
     /* TODO include before work  */
     // this.viewMode$.subscribe((listType: string) => this.isListType = (listType === 'list'));

     // TODO - only for testing
     this.viewMode$ = from('list');
     this.products$ = of([
       {
         title: 'my test product',
         description: `my very first testing product my very first testing product my very first testing product
            my very first testing product my very first testing product my very first testing product`,
         category_title: 'test',
         price: 99.99,
         stock: 15
       },
       {
         title: 'my test product',
         description: `my very first testing product my very first testing product my very
            first testing product my very first testing product my very first testing product`,
         category_title: 'test',
         price: 99.99,
         stock: 10
       },
       {
         title: 'my test product',
         description: 'my very first testing product',
         category_title: 'test',
         price: 99.99,
         stock: 0
       },
       {
        title: 'my test product',
        description: 'my very first testing product',
        category_title: 'test',
        price: 99.99,
        stock: 18
      },
      {
        title: 'my test product',
        description: 'my very first testing product',
        category_title: 'test',
        price: 99.99,
        stock: 33
      }
     ]);
     // End temp data
  }
}
