import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as productsActions from './../../../shop/store/actions/products.action';
import { Store, StoreModule } from '@ngrx/store';
import { ProductsComponent } from './products.component';
import { getAllCategories } from '../../../shop/store/selectors/categories.selector';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('product form invalid when it empty', () => {
    expect(component.addProductForm.valid).toBeFalsy();
  });

  it('category form invalid when it empty', () => {
    expect(component.addCategoryForm.valid).toBeFalsy();
  });

  // title controls
  it('title field validation', () => {
    let error = {};
    let title = component.addProductForm.controls['title'];
    error = title.errors || {};
    expect(error['required']).toBeTruthy();

    title.setValue('Ph');
    error = title.errors || {};
    expect(error['minLebgth']).toBeTruthy();
    expect(error['required']).toBeFalsy();

    title.setValue('Phone');
    error = title.errors || {};
    expect(error['minLebgth']).toBeTruthy();
    expect(error['required']).toBeTruthy();

  });

  it('description field validation', () => {
    let error = {};
    let description = component.addProductForm.controls['description'];
    error = description.errors || {};
    expect(error['required']).toBeTruthy();

    description.setValue('Desc');
    error = description.errors || {};
    expect(error['minLebgth']).toBeTruthy();
    expect(error['required']).toBeFalsy();

    description.setValue('description test');
    error = description.errors || {};
    expect(error['minLebgth']).toBeTruthy();
    expect(error['required']).toBeTruthy();

  });


});
