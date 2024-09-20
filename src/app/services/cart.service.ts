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

  removeCartProduct(product: Product) {
    const index = this.cart.findIndex(item => item.id === product.id); // Assuming Product has an 'id' property
    if (index !== -1)
      this.cart.splice(index, 1); 
  }

}
