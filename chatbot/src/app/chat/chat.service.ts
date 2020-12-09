import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly url = environment.chatbotApi.URL;
  conversation = new BehaviorSubject<Chat[]>([]);
  
  constructor(private http: HttpClient) {

  }

  public talk(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(this.url, chat)
    .pipe(
      
    );
  }

  update(chat: Chat) {
    this.conversation.next([chat]);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error while calling api', error);
  }
}
