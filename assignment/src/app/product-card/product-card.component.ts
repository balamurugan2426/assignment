import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: product;
  @Input() isEditor!: boolean;
  @Output() editProduct = new EventEmitter<any>();
  constructor(private route: Router, private productService: ProductService) {}
  edit() {
    this.editProduct.emit(this.product);
  }
  addToCart() {
    this.productService.addToCart(this.product);
  }
  showProduct() {
    this.productService.productDetail$.next(this.product);
    this.route.navigateByUrl('product-detail/' + this.product.id);
  }
}
