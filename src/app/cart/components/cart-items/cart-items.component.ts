import { Component, Input } from '@angular/core';

import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {
  @Input() products: Product[] = [];
  quantity: number;

  remove(no: number): void {
    // (this.products).splice(no, 1);
  }

}
