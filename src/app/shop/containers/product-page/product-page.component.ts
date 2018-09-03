import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Store , select} from '@ngrx/store';
import { AddToCart } from './../../../cart/store/actions';
import { Product } from '../../../shared/models/product.model';
import * as fromStore from '../../store';
import * as fromProductsSelectors from '../../store/selectors/products.selector';
import { CartState, CartItem } from '../../../cart/store/reducers/cart.reducer';
import * as productsSelectors from '../../store/selectors';
import * as cartSelectors from '../../../cart/store/selectors/cart.selector';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit {
  id: string;
  products$: Observable<Product[]>;
  count: number = 1;
  loading$: Observable<boolean>;
  product: Product;
  regex: RegExp = new RegExp(/^[0-9]+$/g);
  totalCount$: Observable<{[key: string]: CartItem}>;
  quantity: number;

  constructor(private route: ActivatedRoute,
              private store: Store<CartState>,
              private router: Router) {
    this.products$ = this.store.pipe(select(fromProductsSelectors.getAllProducts));
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(productsSelectors.getProductsLoading));
    this.getProduct();
    this.store.dispatch(new fromStore.LoadProducts());
    this.subscribeToRouting();
  }

  getProduct(): void {
    this.id = this.route.snapshot.params.id;
    this.store.pipe(
        select(productsSelectors.getAllProducts)
      ).subscribe((products: Product[]) => {
        this.product = products.find((product: Product) => product.id === this.id);
    });
  }

  increase(): void {
    if (this.count < this.product.stock) {
      this.count += 1;
    } else {
      this.count;
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

  handleInput(event: KeyboardEvent): number {
    if (+event.target['value'] > this.product.stock) {
      return this.count = this.product.stock;
    }
    return this.count = +event.target['value'];
  }

  private subscribeToRouting(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getProduct();
      }
    });
  }

}
