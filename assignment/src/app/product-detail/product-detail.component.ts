import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../product-list/product-list.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnDestroy {
  product!: Product;
  constructor(
    private productService: ProductService,
    private activateRouter: ActivatedRoute,
    private route: Router
  ) {
    this.productService.productDetail$.next(false);
    this.activateRouter.params.subscribe((params) => {
      let product = this.productService.productList.find(
        (e) => e.id == params['id']
      );
      if (product) {
        this.product = product;
      } else {
        this.route.navigateByUrl('products');
      }
    });
  }
  ngOnDestroy(): void {}
}
