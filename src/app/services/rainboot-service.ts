import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RainBoot } from '../models/rainboot';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RainbootService {
  
  private http = inject(HttpClient);

  getRainBoots(): Observable<RainBoot[]> {
    return this.http.get<RainBoot[]>(`${environment.backendUrl}/rainboot`);
  }

  getRainBootById(id: number): Observable<RainBoot> {
    return this.http.get<RainBoot>(`${environment.backendUrl}/rainboot/${id}`);
  }

}
