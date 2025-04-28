import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-top-salling',
  imports: [],
  templateUrl: './top-salling.component.html',
  styleUrl: './top-salling.component.scss',
})
export class TopSallingComponent {
  productsData = input.required<Product[]>();
  calculateDiscountPercentage(price: number, offerPrice: number) {
    return Math.round(((price - offerPrice) / price) * 100);
  }
}
