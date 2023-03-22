import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() transactions: any;
  @Output() onSelectTransaction = new EventEmitter<any>();

  constructor() { }

  totalPayments: number = 0;
  totalAccounts: number = 0;
  totalTransactions: number = 0;

  ngOnInit(): void {
    this.getSummary();
  }

  getSummary() {
    // Payments
    this.totalPayments = this.transactions.reduce((n, {amount}) => n + +amount, 0);

    // Accounts
    const groupByCategory = this.transactions.reduce((group, transaction) => {
      const { accountId } = transaction;
      group[accountId] = group[accountId] ?? [];
      group[accountId].push(transaction);
      return group;
    }, {});
    this.totalAccounts = Object.keys(groupByCategory).length;

    // Transactions
    this.totalTransactions = this.transactions.length;
  }


}
