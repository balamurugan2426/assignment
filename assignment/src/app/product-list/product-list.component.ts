import { Component, OnInit } from '@angular/core';
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
export class ProductListComponent implements OnInit {
  productList!: product[];
  isEditor!: boolean;
  modalRef!: BsModalRef;
  constructor(
    private loginService: LoginService,
    private modalService: BsModalService,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isEditor = this.loginService.isAdmin;
    this.productList = this.productService.productList;
  }

  editProduct(product: product) {
    this.modalRef = this.modalService.show(EditProductComponent, {
      initialState: { product: product },
    });

    this.modalRef.content.onProductEdited = (updatedProduct: product) => {
      const index = this.productList.findIndex((p) => p === product);
      if (index !== -1) {
        updatedProduct.id = this.productList[index].id;
        this.productList[index] = updatedProduct;
        this.productService.productList = this.productList;
      }
    };
  }
}
export class product {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  image!: string;
}
