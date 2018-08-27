import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  @Input() products: Product[] = [];

  getTotalPrice(): number {
    return this.products.reduce((total: number, e: Product) => {
      total += e.price;

      return total;
    }, 0);
  }

}
