import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ProductComponent } from './pages/product/product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
 
 { path:'', component: DashboardComponent },
 {path: 'product/:id', component: ProductComponent},
 {path: 'contact', component:ContactComponent},
 {path:'products', component:ProductsComponent}
 ];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
