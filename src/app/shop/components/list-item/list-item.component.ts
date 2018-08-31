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

  @Output() emitAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

  protected addToCart($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.emitAddToCart.emit(this.product);
  }

}
