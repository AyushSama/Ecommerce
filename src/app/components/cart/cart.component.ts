import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartProducts!:Product[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.cartProducts = this.cartService.getCartProducts();
      console.log(this.cartProducts);
  }

  handleRemoveCartProduct(product:Product){
    this.cartService.removeCartProduct(product);
    this.cartProducts = this.cartService.getCartProducts();
  }
  
}
