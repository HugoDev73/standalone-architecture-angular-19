import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../api-config/api-config.service';
import { Endpoints } from '../../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

 constructor(
   
    private apiConfig: ApiConfigService
  ) {}

  getAllProducts() {
    const endpoint = Endpoints.products.list;
    const url = this.apiConfig.getEndpoint(endpoint);
    console.log(url);
    
   /*  return this.http.get(url); */
  }

  getProductById(id: number) {
    const endpoint = Endpoints.products.detail(id);
    const url = this.apiConfig.getEndpoint(endpoint);
    console.log(url);
    
    /* return this.http.get(url); */
  }
}
