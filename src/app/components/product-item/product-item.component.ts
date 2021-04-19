import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
