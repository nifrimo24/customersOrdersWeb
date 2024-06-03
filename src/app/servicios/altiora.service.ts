import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { CustomerResponse, OrderResponse, ProductResponse } from '../utils/APIResponse';
import { CustomerRequest } from '../utils/APIRequest';

@Injectable({
  providedIn: 'root'
})
export class AltioraService {

  urlcustomersOrdersAPI: string = environment.urlLocal;

  constructor(private http: HttpClient) { }

  private async getResponse(request: Observable<any>) {
    try {
      return [await lastValueFrom(request), null];
    } catch (_) {
      return [null, _];
    }
  }

  async CreateCustomer(customerRequest: CustomerRequest) {
    let urlCreateCustomer = `${this.urlcustomersOrdersAPI}customers`;
    return await this.getResponse(this.http.post<number>(urlCreateCustomer, customerRequest));
  }

  async GetAllCustomers() {
    let urlGetAllCustomers = `${this.urlcustomersOrdersAPI}customers`;
    return (await this.getResponse(this.http.get<CustomerResponse[]>(urlGetAllCustomers)))[0];
  }

  async GetAllOrders() {
    let urlGetAllOrders = `${this.urlcustomersOrdersAPI}orders`;
    return (await this.getResponse(this.http.get<OrderResponse[]>(urlGetAllOrders)))[0];
  }

  async GetAllProducts() {
    let urlGetAllProducs = `${this.urlcustomersOrdersAPI}products`;
    return (await this.getResponse(this.http.get<ProductResponse[]>(urlGetAllProducs)))[0];
  }




}
