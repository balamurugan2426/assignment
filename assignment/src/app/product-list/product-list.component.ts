import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductService } from '../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  isEditor!: boolean;
  modalRef!: BsModalRef;
  constructor(
    private loginService: LoginService,
    private modalService: BsModalService,
    public productService: ProductService
  ) {
    this.isEditor = this.loginService.isAdmin;
    this.productService.productDetail$.next(false);
  }
  ngOnInit(): void {
    window.addEventListener('beforeunload', () => {
      this.productService.productDetail$.next(true);
    });
  }

  editProduct(product: Product) {
    this.modalRef = this.modalService.show(EditProductComponent, {
      initialState: { product: product },
    });

    this.modalRef.content.onProductEdited = (updatedProduct: Product) => {
      const index = this.productService.productList.findIndex(
        (p) => p === product
      );
      if (index !== -1) {
        updatedProduct.id = this.productService.productList[index].id;
        this.productService.productList[index] = updatedProduct;
      }
    };
  }
  ngOnDestroy(): void {
    this.productService.productDetail$.next(true);
  }
}
export class Product {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  image!: string;
  quantity!: number;
}
