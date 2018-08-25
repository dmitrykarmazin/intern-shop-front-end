import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../shared/models/category.model';

interface FilterPrice {
  from: string;
  to: string;
}

export interface Filters {
  price: FilterPrice;
  category: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  categoryId: string = '';
  price: FilterPrice = { from: '0', to: '10000' };

  @Output() filters: EventEmitter<Filters> = new EventEmitter();
  @Input() categories: Category[];

  constructor() {
    // ...
  }

  getCategoryId(id: string): void {
    this.categoryId = id;
  }

  getPrice(from: string, to: string): void {
    this.price = {
      from,
      to
    };
  }

  getFilters(): void {
    this.filters.emit({
      price: this.price,
      category: this.categoryId
    });
  }
}
