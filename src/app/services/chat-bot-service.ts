import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatBotService {

  private http = inject(HttpClient);

  postMessage(messageList: Message[]): Observable<Message> {
    return this.http.post<Message>(`${environment.backendUrl}/chat`, messageList);
  }
}
