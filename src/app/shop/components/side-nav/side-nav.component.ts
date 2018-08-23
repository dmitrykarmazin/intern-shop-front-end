import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../../../shared/models/category.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Output() categoryFilter: EventEmitter<string> = new EventEmitter();
  @Input() categories: Category[];

  constructor() {
  }

  getCategoryId(id: string) {
    this.categoryFilter.emit(id);
  }

  onSubmit(from: string, to: string) {
    console.log(`${from} - ${to}`);
  }

}
