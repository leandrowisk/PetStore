import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
       
         
    this.http.get<Category[]>(`${environment.apiUrl}v1/categories`).subscribe(

          categories => {
           
            observer.next(categories);
            observer.complete();
          },
          () => { 
            
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });
}
}
