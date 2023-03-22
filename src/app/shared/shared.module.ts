import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Shared Components
import { ButtonComponent } from './components/button/button.component';

// Shared Services
import { CopyService } from './services/copy.service';

// Shared Models
import { CopyModel } from './models/copy.model';

// Shared Pipes

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    CopyModel,
    CopyService,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ButtonComponent,
  ]
})
export class SharedModule { }
