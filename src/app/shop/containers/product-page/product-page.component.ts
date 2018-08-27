import { AddToCart } from './../../../cart/store/actions/cart.actions';
import { cartState } from './../../../cart/store/selectors/cart.selectors';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { Store } from '@ngrx/store';
import * as cartActions from '../../../cart/store/actions/cart.actions';
import { CartState } from '../../../cart/store/reducers/cart.reducer';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  count: number = 1;
  thumbnailURL: string = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Samsung_Galaxy_S9%2B.png';
  product: Product = {
    id: '5b82dba680a7ce48203557da',
    title: 'Google pixel 2',
    price: '$799.99',
    category_id: '1',
    category_title: 'phone',
    stock: 77,
    description:
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat
      molestias illo expedita placeat aut. Rerum distinctio aut, id optio ipsam
      provident libero, quam dolorem sequi iste impedit harum quod aspernatur
      saepe. Architecto totam ratione modi pariatur placeat minus vitae
      voluptatem enim repellendus necessitatibus officia recusandae eligendi
      quos esse, non veniam harum adipisci aliquam rerum sit illum tenetur
      qui magni! Itaque, accusamus, quod autem maxime quasi amet modi in
      culpa tenetur aliquam rerum sed quam voluptatibus error nemo dolor.
      Illo dignissimos facere tempora quaerat sed quo expedita sequi totam.
      Temporibus id a corporis sit commodi necessitatibus voluptatum,
      incidunt nesciunt sint?`
  };
  sub: Subscription;
  id: string;

  private countSubj: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  count$: Observable<number> = this.countSubj.asObservable();

  constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<CartState>) {}

  ngOnInit(): void {

    this.sub = this.count$.subscribe((quantity: number) => {
      this.count = quantity;
    });
  }

  increase(): void {
    if (this.count < this.product.stock) {
      this.countSubj.next(this.count + 1);
    }
  }

  decrease(): void {
    if (this.count > 1) {
      this.countSubj.next(this.count - 1);
    }
  }

  addToCard(): void {
    this.store.dispatch(new AddToCart({
      product: this.product,
      quantity: this.count
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
