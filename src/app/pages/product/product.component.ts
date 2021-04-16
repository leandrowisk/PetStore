import { ProductsService } from './../../services/products.service';
import { Product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { SwiperOptions } from 'swiper';
import{RouterModule} from '@angular/router'



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: Product;
  
  constructor(private productService: ProductsService, private route:ActivatedRoute) { }

  ngOnInit(){
    this.getProduct();
   
  }

 getProduct(): void{

  const id = this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id).subscribe(product=> this.product = product);
 }

 public swiperConfig: SwiperOptions = {
 
  direction: 'horizontal', // Aqui definimos a direção que o slide deve seguir "horizontal" ou "vertical"
  keyboard: true, // Aqui definimos se o slide passará as fotos caso pressionarmos as setas do teclado, caso seja falso esse comportamento não acontecerá
  grabCursor: true, // Aqui ao passar o mouse no slide, será trocado o cursor, permitindo arrastar para o próximo slide
  pagination: { el: '.swiper-pagination', clickable: true, } // Aqui definimos a paginação dele, no caso são as bolinhas que ficam na parte inferior do slide
  
    };

}
