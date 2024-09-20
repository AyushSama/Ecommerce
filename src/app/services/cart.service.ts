import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Product[] = [];

  constructor() { }

  getCartProducts(){
    return this.cart;
  }

  setCartProducts(product:Product){
    this.cart.push(product);
    console.log(this.cart);
  }

}
