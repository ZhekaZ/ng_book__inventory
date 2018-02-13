import {
  Component,
  EventEmitter
} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //title = 'app works!';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MySHOES',
        'Black running shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJAKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        29.99),
      new Product(
        'NiceHat',
        'A Nice Black HAt',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  };

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
