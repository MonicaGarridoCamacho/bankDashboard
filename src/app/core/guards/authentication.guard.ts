import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const url: string = state.url;
    // const authStatus: any = await this.authService.getStatus().toPromise();
    if (environment.login) {
      return this.checkLogin(url);
    } else {
      console.log('login disable in environment settings');
      return true;
    }
  }

  checkLogin(url: string): boolean {
    const sessionToken = sessionStorage.getItem('token');
    if (sessionToken) {
      console.log('User logged');
      return true;
    } else {
      console.log('User NOT logged');
      // Navigate to the login page with extras
      this.router.navigate(['/auth/login']);
    }
    return false;
  }

}
