import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/cart.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  subs: Subscription;
  public isLoaded: boolean = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.subs = this.productsService.getProductsToCart()
      .subscribe((data: Product[]) => this.products = data);
    this.isLoaded = true;
  }

  getCountIsEmpty(): number {
    return this.products.reduce((total: number, e: Product) => {
      total += e.price;

      return total;
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
