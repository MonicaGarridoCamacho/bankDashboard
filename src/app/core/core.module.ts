import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Core Guards
import { EnsureModuleLoadedOnceGuard } from './guards/ensureModuleLoadedOnce.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

// Core Components
import { MainMenuComponent } from './main-menu/main-menu.component';

// Core Services
import { IgniteService } from './services/database/ignite.service';

// Core Pipes
import { DatePipe } from '@angular/common';

// Socket Services
// import { SocketIoModule } from 'ngx-socket-io';
// import { CookieService } from 'ngx-cookie-service';
// import { SocketProviderConnect } from './services/websocket/web-socket.service';


@NgModule({
  providers: [
    AuthenticationGuard,
    DatePipe,
    IgniteService,
    // SocketProviderConnect,
    // CookieService
  ],
  imports: [
    SharedModule,
    // SocketIoModule
  ],
  declarations: [ MainMenuComponent],
  exports: [
    MainMenuComponent,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
