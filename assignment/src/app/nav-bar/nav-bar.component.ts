import { Component } from '@angular/core';
import { product } from '../product-list/product-list.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { NavigationStart, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  modalRef!: BsModalRef;
  hideBactBtn: boolean = true;
  constructor(
    private router: Router,
    public loginService: LoginService,
    private modalService: BsModalService,
    private productService: ProductService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url == '/products') {
          this.hideBactBtn = true;
        } else if (e.url == '/login') {
          this.loginService.isAdmin = false;
          this.loginService.isLoggedIn = false;
        } else {
          this.hideBactBtn = false;
        }
      }
    });
  }
  showCart() {
    this.router.navigateByUrl('cart');
  }
  addNewProduct() {
    this.modalRef = this.modalService.show(AddProductComponent);
    this.modalRef.content.onProductAdded = (product: product) => {
      product.id = this.productService.productList.length;
      this.productService.productList.push(product);
    };
  }
  showProductList() {
    this.router.navigateByUrl('products');
  }
}
