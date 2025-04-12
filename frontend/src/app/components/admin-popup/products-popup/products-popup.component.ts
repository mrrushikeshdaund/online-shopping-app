import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/products.model';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-products-popup',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
  ],
  templateUrl: './products-popup.component.html',
  styleUrl: './products-popup.component.scss',
})
export class ProductsPopupComponent {
  product: Product = {
    name: '',
    category: '',
    sex: 'Male',
    size: [],
    color: '',
    brand: '',
    offerPrice: 0,
    stock: 0,
    imageUrl: [],
    price: 0,
  };
}
