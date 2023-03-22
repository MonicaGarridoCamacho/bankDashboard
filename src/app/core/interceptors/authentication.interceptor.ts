import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interceptor used for JWT to add Authorization Bearer token to backend api calls
// Only needed if login is handled from Passport in backend instead of IBM AppID
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header = req;
    if (req.url.indexOf('api') >= 0) {
      const sessionToken = sessionStorage.getItem('token');
      header = req.clone({ headers: req.headers.set('Authorization', `Bearer ${sessionToken}`)});
    }
    return next.handle(header);
  }

}
