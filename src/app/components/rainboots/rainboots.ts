import { Component, inject, signal } from '@angular/core';
import { RainbootService } from '../../services/rainboot-service';
import { RainBoot } from '../../models/rainboot';

@Component({
  selector: 'app-rainboots',
  standalone: false,
  templateUrl: './rainboots.html',
  styleUrl: './rainboots.css',
})
export class RainBoots {

  private rainbootService = inject(RainbootService);

  rainbootList = signal<RainBoot[]>([]);

  ngOnInit() {
    this.rainbootService.getRainBoots().subscribe({
      next: (response) => {
        console.log(response);
        this.rainbootList.set(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
