import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Umbrella } from '../models/umbrella';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UmbrellaService {

  private http = inject(HttpClient);

  getUmbrellas(): Observable<Umbrella[]> {
    return this.http.get<Umbrella[]>(`${environment.backendUrl}/umbrella`);
  }

  getUmbrellaById(id: number): Observable<Umbrella> {
    return this.http.get<Umbrella>(`${environment.backendUrl}/umbrella/${id}`);
  }
  
}
