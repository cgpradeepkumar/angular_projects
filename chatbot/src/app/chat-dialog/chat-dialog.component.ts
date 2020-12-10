import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Chat } from '../chat/chat';
import { ChatService } from '../chat/chat.service';

import { environment } from "../../environments/environment";
import { from, Observable, of } from 'rxjs';
import { BehaviorSubject } from "rxjs";
import { scan } from 'rxjs/operators';
import { Message } from '../chat/message';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  message: string;
  sessionId: string;
  chats: Observable<Message[]>;
  endpoint: string = environment.chatbotApi.URL;
  
  constructor(public chatService: ChatService, public activeModal: NgbActiveModal) {

    // this.chat = new Chat();
    // this.chat.sessionId = null;
    // this.chat.message = '';
    // this.chat.reply = '';

  }

  ngOnInit() {
    this.chats = this.chatService.conversation
    .asObservable()
    
    .pipe(
      scan((acc, val) => acc.concat(val)));
  }

  onSubmit() {
    console.log('request -> ' + this.message);
    // this.chatService.talk(this.chat).subscribe(response => {
    //   console.log('response -> ' + response);
    //   this.chat.sessionId = response.sessionId;
    //   console.log('reply -> ' + response.reply);
    //   console.log('sessionId -> ' + response.sessionId);
    //   this.conversations.push(response); 
    //   this.chat.message = '';    
    // }, errors => {
    //   console.log('errors -> ' + errors);
    // });

    this.chatService.talk(this.message);
  }

  update(reply: Chat) {
    
  }

}
