import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() onToggleChat = new EventEmitter<boolean>();

  isChatOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.onToggleChat.emit(this.isChatOpen);
  }

}
