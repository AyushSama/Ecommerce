import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent{
  @Input() product!:Product;
}
