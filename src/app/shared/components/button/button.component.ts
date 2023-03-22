import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() leftIcon: string;  // class defined for FontAwesome5
  @Input() rightIcon: string; // class defined for FontAwesome5
  @Input() text: string;
  @Input() type: string;


  constructor() { }

  ngOnInit(): void {
  }

}
