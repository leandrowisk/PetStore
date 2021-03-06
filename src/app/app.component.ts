import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private router:Router){}

  title = 'Petstore';
  menus=[

    {'name': 'Home' , 'router': '/'},
    {'name': 'Produtos', 'router': '/products' },
    {'name': 'Contato', 'router': '/contact' }
   

]

showPage(pageName:string, sidenav:MatSidenav){
  this.router.navigate([pageName]);
  sidenav.close();
}
  

  
  
}
