import * as categoryActions from './../../../shop/store/actions/categories.action';
import { Product } from './../../../shared/models/product.model';
import * as productsActions from './../../../shop/store/actions/products.action';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../../shared/models/category.model';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { getAllCategories } from '../../../shop/store/selectors/categories.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  categories$: Observable<Category[]>;
  category: Category;
  addProductForm: FormGroup;
  addCategoryForm: FormGroup;
  product: Product;
  regLink: RegExp = /^(http(s)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  noDecimal: RegExp = /^\d+$/g;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new categoryActions.LoadCategories());
    this.categories$ = this.store.pipe(
      select(getAllCategories)
    );

    this.addProductForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      category_title: ['', [
        Validators.required
      ]],
      stock: [1, [
        Validators.min(1),
        Validators.pattern(this.noDecimal)
      ]],
      price: [1, [
        Validators.min(0.01)
      ]],
      thumbnail: ['', [
        Validators.required,
        Validators.pattern(this.regLink)
      ]]
    });

    this.addCategoryForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }
  submitNewProduct(): void {
    this.product = this.addProductForm.value;
    this.store.dispatch(new productsActions.AddProductStart(this.product));
    this.resetForm(this.addProductForm);
  }
  submitNewCategory(): void {
     this.category = this.addCategoryForm.value;
     this.store.dispatch(new categoryActions.AddCategory(this.category));
     this.resetForm(this.addCategoryForm);
  }

  private resetForm(formGroup: FormGroup): void {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).map((name: any) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
}
