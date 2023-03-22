import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IgniteService } from '../../../core/services/database/ignite.service';
// import { customers } from '../../mocked/customers.mock';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  @Input() customers: any;
  @Output() onSelectCustomer = new EventEmitter<any>();

  constructor(private igniteService: IgniteService) { }

  nameFilter: string;

  ngOnInit(): void {
    // this.customers = customers;  // Mocked
    this.igniteService.getCustomers().subscribe(
      response => {
        this.customers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  select(customer: any) {
    // console.log('select new customer event');
    this.onSelectCustomer.emit(customer);
  }
}
