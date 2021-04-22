import { ProductsGetResponse, ProductsHighlights } from './../../interfaces/products-highlights';
import { Product} from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { isPromise } from '@angular/compiler/src/util';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  
  
 
  constructor(private productsService:ProductsService) { }
  
   ngOnInit(): void {
     this.getProducts();
   
  }

  getProducts():void{
    
    this.productsService.getProducts().subscribe(products => this.products=products.products);
    
  }
}
