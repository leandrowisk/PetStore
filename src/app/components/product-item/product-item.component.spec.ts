import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AnimalType } from './../../interfaces/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';





describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ProductItemComponent ,
        MockComponents(MatIcon,MatCard,MatCardTitle,MatCardContent),
       ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product= {"name": "Ração", "description": "A Ra\u00e7\u00e3o Royal Canin Canine Veterinary Diet Hypoallergenic para C\u00e3es Adultos com Alergias, \u00e9 indicado para a dieta de elimina\u00e7\u00e3o de alergias alimentares com manifesta\u00e7\u00f5es dermatol\u00f3gicas e/ou digestivas e doen\u00e7a inflamat\u00f3ria cr\u00f4nica do intestino.", "value": 115.49, "promotional_value": 101.24, "featured_image": "https://www.petlove.com.br/images/products/232944/large/Ra%C3%A7%C3%A3o_Royal_Canin_Canine_Veterinary_Diet_Hypoallergenic_para_C%C3%A3es_Adultos_com_Alergias_3105636.jpg", "images": ["https://www.petlove.com.br/images/products/232945/large/Ra%C3%A7%C3%A3o_Royal_Canin_Canine_Veterinary_Diet_Hypoallergenic_para_C%C3%A3es_Adultos_com_Alergias_3105636_2.jpg?", "https://www.petlove.com.br/images/products/231738/large/Ra%C3%A7%C3%A3o_%C3%9Amida_Pedigree_Sach%C3%AA_Frango_ao_Molho_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_3106423_4.jpg", "https://www.petlove.com.br/images/products/231740/large/Ra%C3%A7%C3%A3o_%C3%9Amida_Pedigree_Sach%C3%AA_Frango_ao_Molho_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_3106423_6.jpg?"], "videos": ["https://www.youtube.com/watch?v=d6NRn-wzyUc"], "rating_stars": 4.8, "rating_count": 75, "installment_available": true, "installment_count": 12, "featured": false, "category": "ra\u00e7\u00e3o", "subcategory": "ra\u00e7\u00e3o medicamentosa", "animal_type": AnimalType.Dog, "status": "active", "url": "/racao-pedigree-adulto-frango-ao-molho-sache---100gr-310236574", "created_at": "2021-04-12 21:28:39.331358+00:00", "id": "1TFqIbILrwIsOEqxPgpr"}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five icon stars in html', () => {
    const html = fixture.nativeElement;
    
    const matIcons = html.getElementsByTagName('mat-icon');
    expect(matIcons.length).toEqual(5);
    expect(matIcons[0].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star");
    
  });

  
  it('should verify if the name of product exists', () => {
    const html = fixture.nativeElement;
    const matCardTitle = document.querySelector('mat-card-title');
    expect(matCardTitle?.textContent?.trim()).toEqual('Ração');
  

  });

  it('should verify if the value and promotional value  of product exists', () => {
    const html = fixture.nativeElement;
    const valor = html.querySelector('preco-sem-desconto');
    const descont=html.querySelector('preco-final')
    expect(valor?.textContent?.toEqual(115.49));
    expect(descont?.textContent?.toEqual(101.24));

  });


  it('should show stars with 3.5 rating star', () => {
  
    component.product.rating_stars = 3.5
    
    fixture.autoDetectChanges();
    const html = fixture.nativeElement;
    const matIcons = document.getElementsByTagName('mat-icon');
    expect(matIcons[0].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star");
    expect(matIcons[1].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star");
    expect(matIcons[2].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star");
    expect(matIcons[3].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star_half");
    expect(matIcons[4].getElementsByTagName('span')[0].textContent?.trim()).toEqual("star_border");
    
  });
});
