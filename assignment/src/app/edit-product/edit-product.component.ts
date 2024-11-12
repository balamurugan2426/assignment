import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product } from '../product-list/product-list.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  @Input() product!: product;
  productForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with existing product data
    this.productForm = this.fb.group({
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required],
      image: [this.product.image, Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.bsModalRef.hide();
      // Pass updated product data back to the parent component
      this.bsModalRef.content.onProductEdited(this.productForm.value);
    }
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
