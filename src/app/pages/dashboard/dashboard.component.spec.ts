import { ProductsService } from './../../services/products.service';
import { ProductsServiceMock } from './../../mocks/product-mock';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { MockComponent, MockComponents } from 'ng-mocks';
import { CategoriesFeaturedComponent } from './../../components/categories-featured/categories-featured.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesServicesMock } from './../../mocks/categories-mocks';
import { CategoriesService } from './../../services/categories.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
      MockComponent(CategoriesFeaturedComponent),
      MockComponent(ProductItemComponent)],
     
      providers:[{
        provide: ProductsService,
        useClass:ProductsServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
