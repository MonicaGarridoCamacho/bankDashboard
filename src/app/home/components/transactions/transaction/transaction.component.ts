import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transaction: any;
  @Output() selectTransaction = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  select(customer: any) {
    this.selectTransaction.emit(this.transaction);
  }

}
