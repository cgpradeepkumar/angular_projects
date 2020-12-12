import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Chat } from '../chat/chat';
import { ChatService } from '../chat/chat.service';

import { environment } from "../../environments/environment";
import { empty, from, Observable, of } from 'rxjs';
import { BehaviorSubject } from "rxjs";
import { filter, scan } from 'rxjs/operators';
import { Message } from '../chat/message';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  message: string;
  chats: Observable<Message[]>;
  endpoint: string = environment.chatbotApi.URL;
  
  constructor(public chatService: ChatService, public activeModal: NgbActiveModal) {
    // this.chats = of([]);
    this.message = '';
  }

  ngOnInit() {
    this.chats = this.chatService.conversation
    .asObservable()
    .pipe(scan((acc, val) => acc.concat(val)));
  }

  onSubmit() {
    console.log('request -> ' + this.message);
    this.chatService.talk(this.message);
    this.message = '';
  }

  close() {
    console.log('closing popup.......');
    this.chatService.update(new Message('', ''));
    // this.chats = empty();
    // this.activeModal.close();
    this.activeModal.dismiss();
  }

}
