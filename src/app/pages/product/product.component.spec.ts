import { SwiperComponent } from 'ngx-useful-swiper';
import { MatIcon } from '@angular/material/icon';
import { from } from 'rxjs';
import { MockComponents } from 'ng-mocks';
import { ProductsServiceMock } from './../../mocks/product-mock';
import { ProductsService } from './../../services/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent,MockComponents(MatIcon,SwiperComponent,RouterLink)],
      providers:[
        {
          provide:ProductsService,
          useClass: ProductsServiceMock
        },
        {
          provide:ActivatedRoute,

          useValue: {
            snapshot: {
              paramMap: {
                get(id: string) {
                  return '123'
                }
              }
            }
          },
       
        }
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the title and price of a product',() =>{
   
    const html = fixture.nativeElement;
    const valor=html.querySelector('value');
    const desconto=html.querySelector('promotional-value');
    const titulo=html.querySelector('nome');
    expect(titulo?.textContent?.trim()).toEqual(undefined);
    expect(valor==204.90);
    expect(desconto==184.41);
  });
});
