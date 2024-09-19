import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../interfaces/Product';
import { ProductThumbnailComponent } from "../product-thumbnail/product-thumbnail.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductThumbnailComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products!:Product[];
  images!:string[];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.apiService.getProducts()
    .subscribe({
      next: (res: any) => {
        this.products = res;
        this.images = this.products.map(product => product.image);
        console.log(this.images);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }
}