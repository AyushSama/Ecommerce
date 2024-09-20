import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { MatIcon } from '@angular/material/icon';
import { ProductThumbnailComponent } from '../product-thumbnail/product-thumbnail.component';
import { CartService } from '../../services/cart.service';

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

  constructor(private productService : ProductService,private cartService : CartService){}

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
