import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// import { sales } from '../../mocked/sales.mock';
import { IgniteService } from '../../../core/services/database/ignite.service';


import * as _ from 'lodash';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})
export class CustomerTransactionsComponent implements OnInit {

  @Input() customer: any;
  @Input() notification: any;

  constructor(private igniteService: IgniteService) { }

  currentProduct: any;
  productNameFilter: string;

  products: any = [];
  sales: any;
  salesByDate: any = [];

  salesCount: number = 0;
  salesAmount: number = 0;
  productsCount: number = 0;

  areProductsLoading = true;

  ngOnInit(): void {
    this.getSales();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Restar chat if current customer changes
    if (changes.notification) {
      this.getSales();
    }
  }

  private getSales() {
    this.areProductsLoading = true;
    // this.sales = sales; // Mocked
    this.igniteService.getSales(this.customer.customerid).subscribe(
      response => {
        this.sales = response;
        this.salesCount = this.sales.length;
        this.salesAmount = this.getTotalSalesCost(this.sales);
        this.groupSalesByDate(this.sales);
        this.extractProducts(this.sales);
      },
      error => {
        console.log(error);
      }
    )
  }

  selectProduct(product: any) {
    if (this.currentProduct !== product) {
      this.currentProduct = product;
    } else {
      this.currentProduct = undefined; // Toggle product if it's already selected
    }
  }

  groupSalesByDate(sales: any) {
    const _groupBy = _.groupBy(sales, 'sales_date');
    const dateKeys = Object.keys(_groupBy);
    this.salesByDate = []; // Restart sales by date
    for (const date of dateKeys) {
      this.salesByDate.push({
        date,
        data: _groupBy[date],
      })
    }
  }

  extractProducts(sales: any) {
    const foundProducts: string[] = [];
    this.products = [];
    for (const sale of sales) {
      if (_.indexOf(foundProducts, sale.product_description) < 0) {
        foundProducts.push(sale.product_description);
        this.products.push(
          {
            product_description: sale.product_description,
            listprice: sale.listprice,
            weight: sale.weight,
            dates: this.getProductsSalesDates(sale.product_description)
          }
        )
      }
    }
    this.productsCount = this.products.length;
    this.areProductsLoading = false;
  }

  getProductsSalesDates(product: string) {
    const dates: string[] = [];
    for (const sale of this.sales) {
      if (sale.product_description === product) {
        dates.push(sale.sales_date);
      }
    }
    return dates;
  }

  checkEmptySalesDate(date: string) {
    // console.log('this.product', this.currentProduct);
    if (this.currentProduct && (_.indexOf(this.currentProduct.dates, date) < 0)) {
      return true;
    } else {
      return false;
    }
  }

  getTotalSalesCost(sales: any) {
    let cost = 0;
    for (const sale of sales) {
      cost += (+sale.cost);
    }
    return cost;
  }
}
