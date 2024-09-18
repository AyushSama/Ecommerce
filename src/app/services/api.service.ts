import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { endpoints } from '../endpoints/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  storeBasePath = environment.storeBasePath;

  getProducts() {
    try {
      return this.http.get(this.storeBasePath + endpoints.productEndpoint);
    } catch (error) {
      throw new Error();
    }
  }
}
