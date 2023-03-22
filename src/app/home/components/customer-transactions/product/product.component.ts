import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  @Input() selectedProduct: string;
  @Output() onSelectProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  select(product: any) {
    this.onSelectProduct.emit(product);
  }

}
