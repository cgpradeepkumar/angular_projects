import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Chat } from '../chat/chat';
import { ChatService } from '../chat/chat.service';

import { environment } from "../../environments/environment";
import { from, Observable, of } from 'rxjs';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  public chat: Chat;
  conversations: Array<Chat> = [];
  chats: Observable<Chat[]>;
  endpoint: string = environment.chatbotApi.URL;
  topic: string = "/topic/chat";
  stompClient: any;
  
  constructor(public chatService: ChatService, public activeModal: NgbActiveModal) {
    this.chat = new Chat();
    this.chat.sessionId = null;
    this.chat.message = '';
    this.chat.reply = '';
  }

  ngOnInit() {
    // this.chatService.conversation.asObservable().subscribe(this.cahts);    
  }

  onSubmit() {
    console.log('request -> ' + this.chat);
    this.chatService.talk(this.chat).subscribe(response => {
      console.log('response -> ' + response);
      this.chat.sessionId = response.sessionId;
      console.log('reply -> ' + response.reply);
      console.log('sessionId -> ' + response.sessionId);
      this.conversations.push(response); 
      this.chat.message = '';    
    }, errors => {
      console.log('errors -> ' + errors);
    });
    // this.chats = this.chatService.talk(this.chat);
    this.chats = of(this.conversations);
  }

  update(reply: Chat) {
    
  }

}
