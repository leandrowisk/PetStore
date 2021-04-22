import { MatCard } from '@angular/material/card';
import { MockComponent, MockComponents } from 'ng-mocks';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { MatError, MatLabel, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule, MatSnackBarModule
      ],
      
      declarations: [ContactComponent,
      MockComponents(MatError,MatLabel,MatFormField,MatInput,MatButton,MatCard)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valid input email', () =>{

    component.formGroup.patchValue({'email':''});
    fixture.autoDetectChanges();
    let inputEmail=document.getElementsByClassName('email')
    let matError=inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O email é obrigatório');

    component.formGroup.patchValue({'email': 'teste@quickfast'});
    fixture.autoDetectChanges();
    inputEmail=document.getElementsByClassName('email')
    matError=inputEmail[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Email inválido');

    component.formGroup.patchValue({'email': 'teste@quickfast.com'});
    fixture.autoDetectChanges();
    inputEmail=document.getElementsByClassName('email')
    matError=inputEmail[0].getElementsByTagName('mat-error');
    expect(matError.length).toEqual(0);
  });

  it('valid input name', () =>{

    component.formGroup.patchValue({'name':''});
    fixture.autoDetectChanges();
    let inputName=document.getElementsByClassName('name')
    let matError=inputName[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O nome é obrigatório');

    
    component.formGroup.patchValue({'name': 'le'});
    fixture.autoDetectChanges();
    inputName=document.getElementsByClassName('name');
    matError=inputName[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('são necessários pelo menos 3 caracteres');
   


    component.formGroup.patchValue({'name': 'aslkdlskfjtkdlsapdiskmvndjsklaksndkfngngkdjsiann'});
    fixture.autoDetectChanges();
    inputName=document.getElementsByClassName('name')
    matError=inputName[0].getElementsByTagName('mat-error');
    expect(matError[0]?.textContent?.trim()).toEqual('Excedeu o número máximo de caracteres (40)');

    component.formGroup.patchValue({'name': 'Leandro'});
    fixture.autoDetectChanges();
    inputName=document.getElementsByClassName('name')
    matError=inputName[0].getElementsByTagName('mat-error');
    expect(matError.length).toEqual(0);
  
  });

  
  it('valid input phone', () =>{

    component.formGroup.patchValue({'phone':''});
    fixture.autoDetectChanges();
    let inputPhone=document.getElementsByClassName('phone')
    let matError=inputPhone[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('O telefone é obrigatório');
    

    
    component.formGroup.patchValue({'phone': '9688228'});
    fixture.autoDetectChanges();
    inputPhone=document.getElementsByClassName('phone')
    matError=inputPhone[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('Insira um telefone válido no formato ddi(ddd)Tel');
    
    
    component.formGroup.patchValue({'phone': '55(11)96882-2810'});
    fixture.autoDetectChanges();
    inputPhone=document.getElementsByClassName('phone')
    matError=inputPhone[0].getElementsByTagName('mat-error');
    expect(matError.length).toEqual(0);
  });


  it('valid input message', () =>{

    component.formGroup.patchValue({'message':''});
    fixture.autoDetectChanges();
    let inputMessage=document.getElementsByClassName('message')
    let matError=inputMessage[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent.trim()).toEqual('A mensagem é obrigatória');

     component.formGroup.patchValue({'message': 'olá mundo'});
     fixture.autoDetectChanges();

     inputMessage=document.getElementsByClassName('message')
     matError=inputMessage[0].getElementsByTagName('mat-error');
     expect(matError.length).toEqual(0);
  });



});
