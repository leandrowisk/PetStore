import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ParametersServiceMock } from './../../mocks/parameters-mock';
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ParametersService } from 'src/app/services/parameters.service';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [FooterComponent,MockComponents(MatIcon,MatCard,MatCardContent,RouterLink)],
      providers:[{
         provide:ParametersService,
         useClass:ParametersServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if the social-medias links works', () => {
    const html = fixture.nativeElement;
    const links=document.getElementsByClassName("social");
    expect(links.length).toEqual(4);
});

it('shold verify if all the images work' ,()=>{
  const html=fixture.nativeElement;
  const images=document.getElementsByTagName('img');
  expect(images.length).toEqual(6);
});

it('shold verify if the trademark work' ,()=>{
  const html=fixture.nativeElement;
  const marca=html.querySelector('.marca');
  expect(marca.textContent.trim()).toEqual('@Petstore');
});


});
