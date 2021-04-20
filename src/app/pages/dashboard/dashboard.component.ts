import { ProductsHighlights } from './../../interfaces/products-highlights';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products!: Product[];
 
  constructor(private productsService : ProductsService) { }

  ngOnInit(){
 
     this.productsService.getSpotlightProducts().subscribe(products => this.products=products);
  }
  
}
