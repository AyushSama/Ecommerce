import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.scss'
})
export class ProductThumbnailComponent implements OnInit {

  constructor(private apiService: ApiService)

  ngOnInit(): void {
      
  }

  getProducts(){

  }
}
