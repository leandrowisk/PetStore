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
      declarations: [ DashboardComponent,CategoriesFeaturedComponent],
      providers:[{
        provide: CategoriesService,
        useClass:CategoriesServicesMock
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
