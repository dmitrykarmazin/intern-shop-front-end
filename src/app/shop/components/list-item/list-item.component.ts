import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() product: Product;
  @Input() viewMode$: Observable<string>;
  @Input() isWish: boolean;

  @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() emitAddToWish: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() emitRemoveFromWish: EventEmitter<string> = new EventEmitter<string>();

  addToCart($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.emitAddToCart.emit(this.product);
  }

  addToWish($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();

    if (this.isWish) {
      this.emitRemoveFromWish.emit(this.product.id);
    } else {
      this.emitAddToWish.emit(this.product);
    }
  }

}
