import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-receiver',
     template: `
    <div>
        <h2>Received Messages</h2>
            <ul>
                <li *ngFor="let message of messages">{{ message }}</li>
            </ul>
         <button (click)="clearMessages()">Clear</button>
     </div>
     `
})
export class ReceiverComponent implements OnInit {
     messages: string[] = [];
    constructor(private messageService: MessageService) {}
     ngOnInit() {
     this.messageService.getMessage().subscribe((message: string) => {
         if (message) {
             this.messages.push(message);
            }
         });
 }
 clearMessages() {
 this.messages = [];
 this.messageService.clearMessages();
}
}
