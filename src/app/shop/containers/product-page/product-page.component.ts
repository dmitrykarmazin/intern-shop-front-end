import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddToCart } from './../../../cart/store/actions';
import { Product } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';
import * as productsAction from '../../store/actions';
import * as productsSelectors from '../../store/selectors';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id: string;
  count: number = 1;
  loading$: Observable<boolean>;
  product: Product;

  constructor(
      private route: ActivatedRoute,
      private store: Store<any>,

    ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.id = this.route.snapshot.params.id;

    setTimeout(() => this.loading$ = this.store.select(productsSelectors.getProductsLoading), 1000);

    this.store.dispatch(new productsAction.LoadProducts());
    this.store.select(productsSelectors.getAllProducts).subscribe((products: Product[]) => {
      this.product = products.filter((product: Product ) => product.id === this.id)[0];
    });
  }

  increase(): void {
    if (this.count < this.product.stock) {
      this.count += 1;
    }
  }

  decrease(): void {
    if (this.count > 1) {
      this.count -= 1;
    }
  }

  addToCard(): void {
    this.store.dispatch(new AddToCart({
      product: this.product,
      quantity: this.count
    }));
  }
  numberOnly(event: KeyboardEvent): any {
    const regex: RegExp = new RegExp(/^[0-9]+$/g);
    const currMount: string = this.count + event.key;
    if (!currMount.match(regex)) {
      event.preventDefault();
    }
  }

}
