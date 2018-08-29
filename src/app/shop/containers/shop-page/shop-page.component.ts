import { Component, OnInit } from '@angular/core';
import { of, Subscription, Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { Filters } from '../../components/sidebar/sidebar.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  products$: Observable<Product[]>;
  viewMode$: Observable<string>;
  categories: Category[];
  sub: Subscription;

  constructor(
    private store: Store<any>,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    this.viewMode$ = of('grid');
    this.products$ = this.productService.getProducts();

    this.categories = [
      { id: '1', title: 'Phones', description: 'description1' },
      { id: '2', title: 'Cars', description: 'description2' },
      { id: '3', title: 'SmartPhones', description: 'description3' },
      { id: '4', title: 'Computers', description: 'description4' }
    ];
  }

  filters(filters: Filters): void {
    // TODO dispatch to store
  }

  private addToCart($event: string): void {
    // TODO dispatch to card
    // event - id
  }
}
