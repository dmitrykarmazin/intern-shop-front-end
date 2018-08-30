import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() viewMode$: Observable<string>;
  @Input() products$: Observable<Product[]>;

  @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

  protected addToCart($event: Product): void {
    this.emitAddToCart.emit($event);
  }
}
