import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product!:Product;
  products!:Product[];

  getProduct(){
    return this.product;
  }

  setProduct(product:Product){
    this.product = product;
  }

  getProducts(){
    return this.products;
  }

  setProducts(products:Product[]){
    this.products = products;
  }
}

