import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RainBoot } from '../models/rainboot';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RainbootService {
  private http = inject(HttpClient);

  showChatBot = signal(false);

  getRainBoots(): Observable<RainBoot[]> {
    return this.http.get<RainBoot[]>(`${environment.backendUrl}/rainboot`);
  }

  getRainBootById(id: number): Observable<RainBoot> {
    return this.http.get<RainBoot>(`${environment.backendUrl}/rainboot/${id}`);
  }

  onShowChatBot() {
    this.showChatBot.set(true);
  }

  onHideChatBot() {
    this.showChatBot.set(false);
  }
}
