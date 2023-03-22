import { Component, OnInit } from '@angular/core';

import { CopyService } from '../../../shared/services/copy.service';

@Component({
  selector: 'app-login-description',
  templateUrl: './login-description.component.html',
  styleUrls: ['./login-description.component.scss']
})
export class LoginDescriptionComponent implements OnInit {

  constructor(private copyService: CopyService) { }

  copy: any = this.copyService.content;

  ngOnInit(): void {
  }

}
