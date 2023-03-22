import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SharedModule,
    CoreModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
