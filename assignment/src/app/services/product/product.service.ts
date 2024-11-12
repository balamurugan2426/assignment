import { Injectable } from '@angular/core';
import { product } from 'src/app/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: product[] = [
    {
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      name: 'test',
      price: 123,
      description: 'ttss',
      image:
        'https://plus.unsplash.com/premium_vector-1710758152340-1b904d410a47?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];
  constructor() {}
}
