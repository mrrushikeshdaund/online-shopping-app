import { Component, inject, OnInit, signal } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef, GridApi } from 'ag-grid-community'; // Column Definition Type Interface
import { MatTabsModule } from '@angular/material/tabs';
import { ProductsService } from '../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { Product, ProductResponse } from '../../models/products.model';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductsPopupComponent } from '../admin-popup/products-popup/products-popup.component';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-admin-products',
  imports: [AgGridAngular, MatTabsModule, MatIconModule, MatDialogModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss',
})
export class AdminProductsComponent {
  private productsService = inject(ProductsService);
  private dialog = inject(MatDialog);

  private destroy$ = new Subject<void>();

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    floatingFilter: true,
    filter: true,
    flex: 1,
    cellStyle: { textAlign: 'center' },
  };

  productsRowData = signal<Product[]>([]); // Signal to hold product data
  productsColDefs: ColDef[] = [
    { field: '_id', headerName: 'ID' },
    { field: 'name', headerName: 'Product Name' },
    { field: 'category', headerName: 'Category' },
    { field: 'sex', headerName: 'Gender' },
    {
      field: 'size',
      headerName: 'Sizes',
      valueFormatter: (params) => params.value?.join(', '),
    },
    { field: 'color', headerName: 'Color' },
    { field: 'brand', headerName: 'Brand' },
    { field: 'rating', headerName: 'Rating' },
    {
      field: 'offerPrice',
      headerName: 'Offer Price',
    },
    { field: 'stock', headerName: 'Stock' },
    {
      field: 'imageUrl',
      headerName: 'Image Preview',
      cellRenderer: (params: any) => {
        return `<img src="${params.value?.[0]}" alt="product image" style="width: 50px; height: auto;" />`;
      },
      hide: true,
    },
    {
      field: 'price',
      headerName: 'Original Price',
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      hide: true,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      hide: true,
    },
  ]; // Column definitions for the product grid

  gridApi: GridApi | null = null; // Grid API for interacting with the grid

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  ngOnInit(): void {
    this.productsService
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: ProductResponse) => {
        console.log(response.msg);
        this.productsRowData.set(response.data);
      });
  }

  openCreateProductDialog() {
    console.log('Open create product dialog');
    this.dialog.open(ProductsPopupComponent, {
      width: '90%',
      height: '80%',
    });
  }

  ngOndestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
