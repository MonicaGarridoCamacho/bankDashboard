import { Injectable } from '@angular/core';

import { CopyModel } from '../models/copy.model';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(private copyModel: CopyModel) { }

  public content = this.copyModel;

  // Use this service in case we need different languages in same demo

}
