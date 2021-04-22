import { MatCard } from '@angular/material/card';
import { ProductComponent } from './../product/product.component';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { HttpTestingController } from '@angular/common/http/testing';
import { ProductsServiceMock } from './../../mocks/products-mock';
import { MockComponent, MockComponents } from 'ng-mocks';
import { ProductsService } from './../../services/products.service';
import { ProductsGetResponse } from './../../interfaces/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalType } from 'src/app/interfaces/product';
import { ProductsComponent } from './products.component';


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let httpTestingController:HttpTestingController;
  
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({

     
      declarations: [ ProductsComponent,
      MockComponents(MatCard,ProductItemComponent)],
      providers:[{
        provide:ProductsService,
        useClass:ProductsServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

 


  it('should show products in html', () =>{

    const compiled=fixture.nativeElement;
    expect(compiled.getElementsByTagName('app-product-item').length).toEqual(1);
  });

  it('should test component title', () =>{

    const compiled=fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('Lista de Produtos');
  });


});
