import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.bsModalRef.hide();
      this.bsModalRef.content.onProductAdded(this.productForm.value);
    }
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
