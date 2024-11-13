import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { product } from '../product-list/product-list.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  // cartItems: product[] = [];
  totalPrice = 0;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  removeFromCart(productId: number) {
    let index = this.productService.cartItems.findIndex(
      (e) => e.id == productId
    );
    if (index > -1) {
      this.productService.cartItems.splice(index, 1);
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.productService.cartItems.reduce(
      (total: number, item: product) => total + item.price * item.quantity,
      0
    );
  }
}
