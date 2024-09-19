import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { MatIcon } from '@angular/material/icon';
import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';

@Component({
  selector: 'app-relatedproduct',
  standalone: true,
  imports: [MatIcon, ProductThumbnailComponent],
  templateUrl: './relatedproduct.component.html',
  styleUrl: './relatedproduct.component.scss'
})
export class RelatedproductComponent {
  product!:Product;
  products!:Product[];

  constructor(private productService : ProductService){}

  ngOnInit(): void {
    this.product = this.productService.getProduct();  
    this.products = this.productService.getProducts();
    console.log(this.product);    
  }
}
