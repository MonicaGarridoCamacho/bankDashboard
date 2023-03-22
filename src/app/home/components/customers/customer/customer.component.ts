import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: any;
  @Output() selectCustomer = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  select(customer: any) {
    this.selectCustomer.emit(customer);
  }

}
