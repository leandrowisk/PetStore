import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule, MatSidenavContainer,MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { Category } from './interfaces/category';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {MatCardModule} from '@angular/material/card';
import { ProductComponent } from './pages/product/product.component';
import { NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import{BreadcrumbModule} from 'angular-crumbs';
import { RouterModule, RouterLink } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ParametersService } from './services/parameters.service';
import { ContactComponent } from './pages/contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent,
    ProductComponent,
    FooterComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    NgxUsefulSwiperModule,
    BreadcrumbModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
],
  exports:[
  
  ],

  providers: [ParametersService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
