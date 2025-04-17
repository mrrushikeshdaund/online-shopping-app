import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/products.model';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../../../services/products.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products-popup',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
  ],
  templateUrl: './products-popup.component.html',
  styleUrl: './products-popup.component.scss',
})
export class ProductsPopupComponent implements OnInit {
  private productsService = inject(ProductsService);
  updatePopup = signal(false);

  private dialogData = inject(MAT_DIALOG_DATA);

  destory$ = new Subject<void>();
  onNoClick() {
    throw new Error('Method not implemented.');
  }
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

  sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  ngOnInit(): void {
    if (this.dialogData) {
      this.product = this.dialogData;
      this.updatePopup.set(true);
    }
    console.log('Dialog data:', this.dialogData);
  }

  constructor(public dialogRef: MatDialogRef<ProductsPopupComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  onAddProduct(): void {
    // Add product logic here
    console.log('Product added:', this.product);
    this.productsService
      .addProduct(this.product)
      .pipe(takeUntil(this.destory$))
      .subscribe((res) => {
        console.log('Product added successfully:', res);
      });

    this.dialogRef.close(this.product);
  }

  onUpdateProduct(): void {
    this.productsService
      .updateProduct(this.product)
      .pipe(takeUntil(this.destory$))
      .subscribe((res) => {
        console.log('Product updated successfully:', res);
      });
    this.dialogRef.close(this.product);
  }

  onDeleteProduct(): void {
    console.log('Product deleted:', this.product);
    this.productsService
      .deleteProduct(this.product)
      .pipe(takeUntil(this.destory$))
      .subscribe((res) => {
        console.log('Product deleted successfully:', res);
      });
    this.dialogRef.close(this.product);
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
