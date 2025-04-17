import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/products.model';
import { ENVIROMENTS } from '../Enviroments';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  getAllProducts(): Observable<ProductResponse> {
    let url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.PRODUCTS.BASE_URL}${ENVIROMENTS.PRODUCTS.ALLDATA}`;
    return this.http.get<ProductResponse>(url);
  }

  addProduct(product: Product): Observable<ProductResponse> {
    let url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.PRODUCTS.BASE_URL}${ENVIROMENTS.PRODUCTS.ADD}`;
    return this.http.post<ProductResponse>(url, product);
  }

  updateProduct(product: Product): Observable<ProductResponse> {
    const url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.PRODUCTS.BASE_URL}${ENVIROMENTS.PRODUCTS.UPDATE}/${product._id}`;
    return this.http.put<ProductResponse>(url, product).pipe(
      catchError((error) => {
        console.error('Update product failed', error);
        return throwError(() => error);
      })
    );
  }
  deleteProduct(product: Product): Observable<ProductResponse> {
    const url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.PRODUCTS.BASE_URL}${ENVIROMENTS.PRODUCTS.DELETE}/${product._id}`;
    return this.http.delete<ProductResponse>(url).pipe(
      catchError((error) => {
        console.error('Delete product failed', error);
        return throwError(() => error);
      })
    );
  }
}
