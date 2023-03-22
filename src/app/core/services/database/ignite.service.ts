import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IgniteService  {

  constructor(private http: HttpClient) { }

  customersApi = `${environment.backend}/mainframe/customers`;
  salesApi = `${environment.backend}/mainframe/sales`;
  transactionsApi= `${environment.backend}/test/transactions`;

  getCustomers(): any {
    return this.http.get(this.customersApi);
  }

  getSales(customerId: string): any {
    const payload: any = {
      customerId,
    };
    return this.http.post(this.salesApi, payload);
  }

  getTransactions(): any {
    console.log('GET TRANSACTIONS SERVICE')
    return this.http.get(this.transactionsApi);
  }
}
