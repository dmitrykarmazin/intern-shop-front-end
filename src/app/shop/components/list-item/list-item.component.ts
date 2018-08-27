import { Component, OnInit, Input } from '@angular/core';

import Product from '../../models/product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() product: Product;

}
