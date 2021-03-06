import { HttpTestingController } from '@angular/common/http/testing';
import { RouterLink } from '@angular/router';
import { ProductsHighlights, ProductsGetResponse } from './../interfaces/products-highlights';
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

  httpTestingControler:HttpTestingController;
  

  constructor(private http: HttpClient) { }
 
  

  
  getSpotlightProducts(): Observable<ProductsHighlights[]> {
    return new Observable<ProductsHighlights[]>(observer => {
       
         
         this.http.get<ProductsHighlights[]>(`${environment.apiUrl}v1/products-highlights`).subscribe(

          products => {
           
            observer.next(products);
            observer.complete();
          },
          () => { 
            
            observer.error('error_on_get_products');
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

  getProducts(){
    return new Observable<ProductsGetResponse>(observer =>{
      this.http.get<ProductsGetResponse>(`${environment.apiUrl}v1/products`).subscribe(
        products =>{
          observer.next(products);
          observer.complete();
        },
        error=>{
          observer.next(error);
          observer.complete();
          
        }
      )
   
    });
  }

  

}