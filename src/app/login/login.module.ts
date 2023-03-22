import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginDescriptionComponent } from './components/login-description/login-description.component';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginDescriptionComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
