import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sender',
  template: `
    <div>
      <input [(ngModel)]="message" placeholder="Type a message" />
      <button (click)="sendMessage()">Send</button>
    </div>
  `
})
export class SenderComponent {
  message = '';
  constructor(private messageService: MessageService) {}
  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendMessage(this.message);
      this.message = '';
    }
  }
}
