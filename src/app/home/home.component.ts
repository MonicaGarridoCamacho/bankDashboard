import { Component, OnInit } from '@angular/core';
import { IgniteService } from '../core/services/database/ignite.service';

// import { SocketProviderConnect } from '../core/services/websocket/web-socket.service';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor(protected socketService: SocketProviderConnect, private cookieService: CookieService) { }
  constructor(private igniteService: IgniteService) { }

  database: any;
  currentTab = 'transactions';


  ngOnInit(): void {
    this.getDatabase();
    // this.subscribeSocketEvents();
  }

  // Websockets

  // subscribeSocketEvents() {
  //   this.socketService.notificationEvent.subscribe(res => {
  //     this.printNotification(res);
  //   });
  //   this.socketService.refreshEvent.subscribe(res => {
  //     this.refreshData(res);
  //   });
  // }

  // printNotification(data: any) {
  //   console.log('--- Notification', data);
  //   this.notification = data.message;
  //   this.toggleNotification();
  // }

  // refreshData(data: any) {
  //   this.database = data.data;
  //   console.log('--- Refresh', this.database);
  // }


  // Notifications
  notification: string;
  showNotification = false;

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }

  // Customers
  currentCustomer: number;

  handleCustomer(customer: any) {
    this.currentCustomer = customer;
    this.currentTab = 'transactions';
  }

  // Tabs menu
  selectTab(tab: string) {
    if (this.currentCustomer) {
      this.currentTab = tab;
    } else {
      this.notification = 'Please, select a customer from the list';
      this.toggleNotification();
    }
  }

  getDatabase(): any {

    // this.database = [
    //   {"accountId":"3","amount":"1500","transactionInformation":"Test","addressLine":"Street","transactionId":"3"},
    //   {"accountId":"2","amount":"125","transactionInformation":"Information","addressLine":"Address","transactionId":"2"},
    //   {"accountId":"1","amount":"1","transactionInformation":"1","addressLine":"1","transactionId":"1"}
    // ];


    this.igniteService.getTransactions().subscribe(
      response => {
        // console.log('DATABASE', response);
        this.database = response;
      },
      error => {
        console.log(error);
      }
    );
  }


}
