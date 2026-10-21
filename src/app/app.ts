import { Component, inject, signal } from '@angular/core';
import { RainbootService } from './services/rainboot-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {

  protected rainBootService = inject(RainbootService)
  
}
