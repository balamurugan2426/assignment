import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: product[] = [
    {
      id: 0,
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 1,
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 2,
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      id: 3,
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
  constructor() {}
}
