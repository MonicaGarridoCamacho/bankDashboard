import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AuthenticationGuard } from './core/guards/authentication.guard';
// import { AuthInterceptorService } from './core/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationGuard,
    //  {
    //    provide: HTTP_INTERCEPTORS,
    //    useClass: AuthInterceptorService,
    //    multi: true
    //  },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
