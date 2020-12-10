import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Chat } from './chat';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly url = environment.chatbotApi.URL;
  conversation = new BehaviorSubject<Message[]>([]);
  sessionId: string;
  constructor(private http: HttpClient) {

  }

  public talk(message: string) {
    let chat = new Chat();
    chat.message = message;
    chat.sessionId = this.sessionId;
    const userMsg = new Message(message, 'user');
    this.update(userMsg);
    return this.http.post<Chat>(this.url, chat)
    .subscribe(response => {
      console.log(response.reply);
      this.sessionId = response.sessionId;
      chat.message = response.message;
      chat.reply = response.reply;
      const botMsg = new Message(response.reply, 'bot');
      this.update(botMsg);
    });
  }

  update(message: Message) {
    this.conversation.next([message]);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error while calling api', error);
  }
}
