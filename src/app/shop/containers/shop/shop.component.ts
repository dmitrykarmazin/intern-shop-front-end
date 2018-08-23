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
      {id: '1', title: 'Title1', description: 'Description1', category_id: '1', category_title: 'Mobile', price: '15000', stock: 38},
      {id: '2', title: 'Title2', description: 'Description2', category_id: '2', category_title: 'Mobile', price: '1500', stock: 64},
      {id: '3', title: 'Title3', description: 'Description3', category_id: '3', category_title: 'Mobile', price: '25000', stock: 32},
      {id: '4', title: 'Title4', description: 'Description4', category_id: '4', category_title: 'Mobile', price: '13500', stock: 2}
    ];
    this.categories = [
      {id: '1', title: 'Phones', description: 'description1'},
      {id: '2', title: 'Cars', description: 'description2'},
      {id: '3', title: 'SmartPhones', description: 'description3'},
      {id: '4', title: 'Computers', description: 'description4'}
    ];
  }

  categoryFilter(id: string) {
    this.products.forEach((p) => {
      if (p.category_id === id) {
        console.log(p);
      }
    });
  }



}
