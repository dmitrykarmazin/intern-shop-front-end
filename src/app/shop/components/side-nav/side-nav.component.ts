import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../shared/models/category.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() categories: Category[];

  constructor() {
  }

  ngOnInit() {
  }

}
