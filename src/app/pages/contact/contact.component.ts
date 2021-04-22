
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;
  EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  PHONE_REGEXP: RegExp= /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;



  constructor(private formBuilder : FormBuilder, private matSnackBar:MatSnackBar) { }

  

  ngOnInit(): void {

    this.setDefaultValues();
  }

  setDefaultValues(){
    this.formGroup= this.formBuilder.group({

      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
      email: ['',[Validators.required,Validators.email,Validators.pattern(this.EMAIL_REGEXP)]],
      phone: ['',[Validators.required, Validators.pattern(this.PHONE_REGEXP)]],
      message: ['',Validators.required],

     
    });
  }

  sendForm() {
    if (this.formGroup.valid) {

      this.matSnackBar.open("Formulário enviado com sucesso!");
      this.formGroup.reset();
      
    }
    else
      this.matSnackBar.open('Formulário inválido! Verifique os campos','Undo',{
        duration: 5000
      });
      
          
       
  }


}
