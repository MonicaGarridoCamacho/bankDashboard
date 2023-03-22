import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AppID from 'ibmcloud-appid-js';

import { environment } from '../../../../environments/environment';
import { CopyService } from '../../../shared/services/copy.service';

const appID = new AppID();

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private copyService: CopyService, private router: Router) { }

  copy: any = this.copyService.content;

  user = '';
  password = '';
  message = this.copy.login.form.error.empty;
  authError = false;
  authErrorMessage = '';

  appIdLoaded = false;
  appIdInitialized: any;
  appIdError = false;
  appIdUnauthorized = false;
  appIdMessage: string;
  appIdToken: any;

  async ngOnInit() {
    try {
      this.appIdInitialized = await appID.init({
        clientId: environment.appID.clientId,
        discoveryEndpoint: environment.appID.discoveryEndpoint
      });
      this.appIdLoaded = true;
      this.appIdError = false;
    } catch (err) {
      console.log('IBM AppID init error :(');
      this.appIdError = true;
      this.appIdMessage = err;
    }
  }

  // New login using IBM AppID
  async onLogin() {
    try {
      this.appIdToken = await appID.signin();
      console.log(this.appIdToken);
      this.appIdUnauthorized = false;
      sessionStorage.setItem('token', this.appIdToken);
      this.router.navigate(['/home']);
    } catch (err) {
      console.log(err);
      this.appIdUnauthorized = true;
      this.appIdMessage = this.copy.login.form.error.unauthorized;
    }
  }

}
