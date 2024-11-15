import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isEditor!: boolean;
  @Output() editProduct = new EventEmitter<any>();
  quantity: number = 0;
  constructor(private route: Router, private productService: ProductService) {}
  edit() {
    this.editProduct.emit(this.product);
  }
  addToCart() {
    let product = {
      ...this.product,
      quantity: this.quantity,
    };
    this.productService.addToCart(product);
  }
  showProduct() {
    this.route.navigate(['/product-detail', this.product.id]);
  }
  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity > 0) this.quantity--;
  }
}
