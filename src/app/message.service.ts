import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class MessageService {
private messageSubject = new Subject<string>();
 sendMessage(message: string) {
    this.messageSubject.next(message);
     }
     clearMessages() {
    this.messageSubject.next(''); // Provide a default value (e.g., undefined)
     }
    getMessage() {
    return this.messageSubject.asObservable();
 }
}
