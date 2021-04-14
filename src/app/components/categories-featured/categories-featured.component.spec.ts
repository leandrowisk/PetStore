import { CategoriesServicesMock } from './../../mocks/categories-mocks';
import { CategoriesService } from './../../services/categories.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFeaturedComponent } from './categories-featured.component';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFeaturedComponent ],
      providers:[{
        provide: CategoriesService,
        useClass:CategoriesServicesMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.categorias-titulo').textContent).toContain('Categorias em destaque');
   
});
it('should check category card item count in HTML', () => {
  const html = fixture.nativeElement;
  // Eu coloquei uma classe na div referente a cada item de categoria, por isso consegui obter pela classe
  expect(html.getElementsByClassName('category-item').length==6);
});

it('should check what is the first categorie name', () => {
  
 
  const html = fixture.nativeElement;
  // Eu coloquei uma classe na div referente a cada item de categoria, por isso consegui obter pela classe
  expect(html.getElementsByClassName('category-item')[0].textContent).toEqual('acessorios para alimentação');
});

});
