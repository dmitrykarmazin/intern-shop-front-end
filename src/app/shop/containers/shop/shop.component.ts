import {Component, OnInit} from '@angular/core';
import {Product} from '../../../shared/models/product.model';
import {Category} from '../../../shared/models/category.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  categories: Category[];

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {id: '1', title: 'Title', description: 'Description', category_id: '1', category_title: 'Mobile', price: '15000', stock: 38}
    ];
    this.categories = [
      {id: '1', title: 'CategoryTitle', description: 'description'}
    ];
  }

}
