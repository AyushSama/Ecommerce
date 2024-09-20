import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { MatIcon } from '@angular/material/icon';
import { ProductThumbnailComponent } from "../product-thumbnail/product-thumbnail.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIcon, ProductThumbnailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  
  product!:Product;
  products!:Product[];

  constructor(private productService : ProductService,private cartService:CartService){}

  ngOnInit(): void {
    this.product = this.productService.getProduct();  
    this.products = this.productService.getProducts();
    // console.log(this.product);    
  }
  
  handleAddToCart(){
    this.cartService.setCartProducts(this.product);
    alert("Added To CArt");
    // console.log(this.cartService.getCartProducts());
  }


}
