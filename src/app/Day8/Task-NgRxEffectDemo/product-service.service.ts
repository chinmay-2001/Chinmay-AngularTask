import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
}
