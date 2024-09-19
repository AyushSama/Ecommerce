import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  
  product!:Product;
  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.product = this.productService.getProduct();  
    console.log(this.product);    
  }
  
  

}
