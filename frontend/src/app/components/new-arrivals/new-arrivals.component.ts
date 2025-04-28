import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-new-arrivals',
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
})
export class NewArrivalsComponent {
  productsData = input.required<Product[]>();
}
