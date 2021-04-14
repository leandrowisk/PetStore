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



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent
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
    HttpClientModule
    
  ],
  exports:[
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
