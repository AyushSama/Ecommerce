import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-thumbnail',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'] // Fix styleUrl to styleUrls
})
export class ProductThumbnailComponent {
  @Input() product!: Product;

  constructor(private router: Router, private productService: ProductService) {} // Inject Router

  handleProduct() {
    this.productService.setProduct(this.product);
    this.router.navigate(['/product']); // Redirect to /products
  }
}
