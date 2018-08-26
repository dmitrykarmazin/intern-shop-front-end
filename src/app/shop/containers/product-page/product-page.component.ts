import { Component, OnInit , OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  count: number = 1;
  product: Product = {
    id: '5b82dba680a7ce48203557da',
    title: 'Google pixel 2',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Samsung_Galaxy_S9%2B.png',
    price: '$799.99',
    category_id: '1',
    category_title: 'phone',
    stock: 77,
    description:
      'Est officia nisi culpa Lorem dolor in irure voluptate enim excepteur ad. Voluptate pariatur ea eslagjgkjdjkgleagq[eiusmod'
  };
  sub: Subscription;
  id: string;

  private countSubj: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  count$: Observable<number> = this.countSubj.asObservable();

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.getProduct();
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
  getProduct(): void {
    this.id = this.route.params['id'];
    // this.http.get<Product>(`http://localhost:8080/products/${this.id}`)
    // .subscribe((data: any) => this.product = data.product);
  }
  addToCard(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
