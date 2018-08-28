import { FiltersObject } from './../../../shared/models/filters.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categoryId: string = '';

  @Output() filters: EventEmitter<FiltersObject> = new EventEmitter();
  @Input() categories$: Observable<Category[]>;

  getCategoryId(id: string): void {
    this.categoryId = id;
  }

  onFiltersChange(from: string, to: string): void {
    this.filters.emit({
      price: {from, to},
      category: this.categoryId,
      stock: null
    });
  }
}
