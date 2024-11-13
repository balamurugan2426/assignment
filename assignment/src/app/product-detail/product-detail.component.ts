import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product!: product;
  constructor(private productService: ProductService) {
    this.productService.productDetail$.subscribe((product) => {
      this.product = product;
    });
  }
}
