import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: product;
  @Input() isEditor!: boolean;
  @Output() editProduct = new EventEmitter<any>();
  constructor() {}
  edit() {
    this.editProduct.emit(this.product);
  }
  addToCart(product: product) {}
}
