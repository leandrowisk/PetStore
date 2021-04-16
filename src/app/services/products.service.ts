import { RouterLink } from '@angular/router';
import { ProductsHighlights } from './../interfaces/products-highlights';
import { Observable } from 'rxjs';
import { Category } from './../interfaces/category';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';
import {RouterModule} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private http: HttpClient) { }
 
  

  
  getSpotlightProducts(): Observable<ProductsHighlights[]> {
    return new Observable<ProductsHighlights[]>(observer => {
       
         
         this.http.get<ProductsHighlights[]>(`${environment.apiUrl}v1/products-highlights`).subscribe(

          products => {
           
            observer.next(products);
            observer.complete();
          },
          () => { 
            
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });

    
  }

  getProduct(id:string | null): Observable<Product>{

    return new Observable<Product>(observer =>{

      this.http.get<Product>(`${environment.apiUrl}v1/product/${id}`).subscribe(
        product=>{ 
        observer.next(product)
        observer.complete();
      },
      error => {
        observer.next(error);
        observer.complete();
      }
      )
    })
  }
}
