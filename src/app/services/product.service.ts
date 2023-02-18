import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../models/apidata.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ApiData> {
    return this.http.get<ApiData>("https://dummyjson.com/products?select=title,price,images,description");
  }
}
