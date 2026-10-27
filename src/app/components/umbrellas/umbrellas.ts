import { Component, inject, signal } from '@angular/core';
import { UmbrellaService } from '../../services/umbrella-service';
import { Umbrella } from '../../models/umbrella';

@Component({
  selector: 'app-umbrellas',
  standalone: false,
  templateUrl: './umbrellas.html',
  styleUrl: './umbrellas.css',
})
export class Umbrellas {
  private umbrellaService = inject(UmbrellaService);

  umbrellaList = signal<Umbrella[]>([]);

  ngOnInit() {
    this.umbrellaService.getUmbrellas().subscribe({
      next: (response) => {
        console.log(response);
        this.umbrellaList.set(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
