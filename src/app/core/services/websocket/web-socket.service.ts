import { Injectable, EventEmitter, Output } from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketProviderConnect extends Socket {

  @Output() notificationEvent: EventEmitter<any> = new EventEmitter();
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService) {

    // Init Socket config using payload
    super({
      url: environment.websocket,
      options: {
        query: {
          // payload: cookieService.get('user')
          payload: `{ "user": "${sessionStorage.getItem('username')}" }`
        }
      }
    });

    // Define event to launch message socket
    // this.ioSocket.on('hello', res => {
    //   console.log('... SOCKET: hello', res)
    // });

    this.ioSocket.on('notification', res => {
      this.notificationEvent.emit(res)
    });

    this.ioSocket.on('refresh', res => {
      this.refreshEvent.emit(res)
    });


  }

  emitEvent = (event = 'message', payload = {}) => {
    this.ioSocket.emit('message', {
      cookiePayload: this.cookieService.get('user'),
      event,
      payload
    });
  }

  disconnect = () => {
    this.ioSocket.disconnect();
  }
}
