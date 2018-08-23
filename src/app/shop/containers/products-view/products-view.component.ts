import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../shared/models/product.model';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  @Input() products: Product[];

  constructor() {
  }

  ngOnInit() {
  }

}
