import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: product[] = [
    {
      id: 0,
      name: 'shoe',
      price: 299,
      description:
        'A protective and stylish foot covering designed for comfort, support, and durability',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 1,
      name: 'brush',
      price: 15,
      description:
        'A versatile tool with bristles for painting, cleaning, or grooming',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'glue',
      price: 50,
      description:
        'An adhesive substance used to bond materials together for various crafting and repair purposes',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'cycle',
      price: 12000,
      description:
        ' A two-wheeled vehicle powered by pedaling, designed for eco-friendly transportation and fitness',
      image:
        'data:image/jpeg;base64,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',
    },
  ];
  product: product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
  };
  productDetail$: BehaviorSubject<product> = new BehaviorSubject<product>(
    this.product
  );
  cartItems: cart[] = [];
  constructor(private toster: ToastrService) {}
  addToCart(product: product) {
    let isProductExist = this.cartItems.find((e) => e.product.id == product.id);
    if (isProductExist) {
      this.toster.warning('product already exist', 'Note!');
    } else {
      this.cartItems.push({ product: product, quantity: 1 });
    }
  }
}
export class cart {
  product!: product;
  quantity!: number;
}
