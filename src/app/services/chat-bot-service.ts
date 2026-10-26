import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatBotService {
  private http = inject(HttpClient);

  showChatBot = signal(false);

  postMessage(messageList: Message[]): Observable<Message> {
    return this.http.post<Message>(`${environment.backendUrl}/chat`, messageList);
  }

  onShowChatBot() {
    this.showChatBot.set(true);
  }

  onHideChatBot() {
    this.showChatBot.set(false);
  }
}
