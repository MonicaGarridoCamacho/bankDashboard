import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerTransactionsComponent } from './components/customer-transactions/customer-transactions.component';
import { ProductComponent } from './components/customer-transactions/product/product.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { FilterCustomerNamePipe } from './components/customers/pipes/filter-customer-name.pipe';
import { FilterProductNamePipe } from './components/customer-transactions/pipes/filter-product-name.pipe';
import { FilterSalesDatePipe } from './components/customer-transactions/pipes/filter-sales-date.pipe';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionComponent } from './components/transactions/transaction/transaction.component';


@NgModule({
  declarations: [HomeComponent, CustomersComponent, CustomerTransactionsComponent, ProductComponent, CustomerComponent, FilterCustomerNamePipe, FilterProductNamePipe, FilterSalesDatePipe, TransactionsComponent, TransactionComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
