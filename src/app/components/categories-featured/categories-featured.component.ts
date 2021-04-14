import { Category } from './../../interfaces/category';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  categories!: Category[];
  

  constructor(public categoriesService: CategoriesService) { }
  
   ngOnInit(): void{
    
    
    this.categoriesService.getCategories().subscribe(categories => this.categories=categories);
    
  }

}
