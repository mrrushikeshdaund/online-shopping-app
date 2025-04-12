import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../models/products.model';
import { ENVIROMENTS } from '../Enviroments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);

  getAllProducts(): Observable<ProductResponse> {
    let url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.PRODUCTS.BASE_URL}${ENVIROMENTS.PRODUCTS.ALLDATA}`;
    return this.http.get<ProductResponse>(url);
  }
}
