import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartFeatureState } from '../../../cart/store/reducers';
import { AddToCart } from './../../../cart/store/actions';
import { Product } from '../../../shared/models/product.model';
import { CartItem } from '../../../cart/store/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { ProductsService } from './../../services/products.service';
// import { productById } from '../../../shop/reducers';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id: string;
  count: number = 1;
  loading: boolean = true;
  product: Product;

  constructor(
      private route: ActivatedRoute,
      private store: Store<CartFeatureState>,
      private productService: ProductsService
    ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.id = this.route.snapshot.params.id;
    this.productService.getProductById(this.id).subscribe((product: any) => {
      if (product) {
        console.log(`[Product page]: ${product.title}`);
        this.product = product;
        this.loading = false;
      }
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
