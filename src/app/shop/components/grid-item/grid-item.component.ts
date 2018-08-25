import { Component, OnInit, Input } from '@angular/core';

import BasicItem from '../basic-item/basic-item';
import Product from '../../models/product';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent extends BasicItem {

}
