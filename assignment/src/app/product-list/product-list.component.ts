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
  isEditor!: boolean;
  modalRef!: BsModalRef;
  constructor(
    private loginService: LoginService,
    private modalService: BsModalService,
    public productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isEditor = this.loginService.isAdmin;
  }
  addNewProduct() {
    this.modalRef = this.modalService.show(AddProductComponent);
    this.modalRef.content.onProductAdded = (product: product) => {
      product.id = this.productService.productList.length;
      this.productService.productList.push(product);
    };
  }
  editProduct(product: product) {
    this.modalRef = this.modalService.show(EditProductComponent, {
      initialState: { product: product },
    });

    this.modalRef.content.onProductEdited = (updatedProduct: product) => {
      const index = this.productService.productList.findIndex(
        (p) => p === product
      );
      if (index !== -1) {
        updatedProduct.id = this.productService.productList[index].id;
        this.productService.productList[index] = updatedProduct;
      }
    };
  }
  showCart() {
    this.router.navigateByUrl('cart');
  }
}
export class product {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  image!: string;
  quantity!: number;
}
