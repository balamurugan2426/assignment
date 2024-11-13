import { Component, OnInit } from '@angular/core';
import { cart, ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  cartItems: cart[] = [];
  totalPrice = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartItems = this.productService.cartItems;
    this.calculateTotalPrice();
  }

  increaseQuantity(item: cart) {
    this.cartItems.forEach((e) => {
      if (e.product.id == item.product.id) {
        e.quantity++;
      }
    });
    this.productService.cartItems = this.cartItems;
    this.calculateTotalPrice();
  }

  decreaseQuantity(item: cart) {
    this.cartItems.forEach((e) => {
      if (e.product.id == item.product.id) {
        e.quantity--;
      }
    });
    this.productService.cartItems = this.cartItems;
    this.calculateTotalPrice();
  }

  removeFromCart(productId: number) {
    let index = this.cartItems.findIndex((e) => e.product.id == productId);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.productService.cartItems = this.cartItems;
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total: number, item: cart) => total + item.product.price * item.quantity,
      0
    );
  }
}
