import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import Product from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() viewMode$: Observable<string>;
  @Input() products$: Observable<Product[]>;

  @Output() emitAddToCard: EventEmitter<string> = new EventEmitter<string>();

  private isListType: boolean = true;

  constructor() {

    // this.viewMode$.subscribe((data: string) => this.isListType = data === 'list' ? true : false);

  }

  private addToCard($event: string): void {
    console.log('Buy me!!!. My id:', $event);
    this.emitAddToCard.emit($event);
  }
}
