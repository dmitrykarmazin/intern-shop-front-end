import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent {

  @Input() product: Product;

  @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() emitRemoveFromList: EventEmitter<string> = new EventEmitter<string>();

  protected addToCart($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    this.emitAddToCart.emit(this.product);
  }

  protected removeFromWishes($event: MouseEvent): void {
    $event.stopPropagation();
    $event.preventDefault();
    this.emitRemoveFromList.emit(this.product.id);
  }

}
