import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private serverUrl = 'http://localhost:3000/products';
  private localUrl = '../../assets/data.json';
  products!: Product[];

  constructor(private http: HttpClient) { 
    this.setProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.localUrl);
  }

  setProducts(): void {
    this.getProducts().subscribe(products => this.products = products);
  }

  getProduct(id: string): Product {
    this.setProducts();
    return this.products.find(product => product.id == Number(id));
  }
}
