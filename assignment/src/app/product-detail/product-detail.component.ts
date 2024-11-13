import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { product } from '../product-list/product-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnDestroy {
  product!: product;
  productDetailSubscription!: Subscription;
  constructor(private productService: ProductService) {
    this.productDetailSubscription =
      this.productService.productDetail$.subscribe((product) => {
        this.product = product;
      });
  }
  addToCart() {
    this.productService.addToCart(this.product);
  }
  ngOnDestroy(): void {
    this.productDetailSubscription.unsubscribe();
  }
}
