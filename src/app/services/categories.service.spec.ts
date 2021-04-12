import { Category } from './../interfaces/category';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should test get categories', () => {
    service.getCategories().subscribe(categories => {
      expect(categories.length).toEqual(2);
      expect(categories[0].name).toEqual('Ração');
    })

  

    
    const req = httpTestingController.expectOne('http://petshop-sp.ue.r.appspot.com/v1/categories');

    
    expect(req.request.method).toEqual('GET');

    
    const categories: Array<Category> = [
      {id: 'dasdasd', name: 'Ração', subcategories: ['ração seca'], url: '', description: ''},
      {id: 'dasdasd', name: 'Brinquedos', subcategories: ['pelucia'], url: '', description: ''}
    ]
    req.flush(categories);

  });
});
