import { Component, inject, signal } from '@angular/core';
import { RainbootService } from '../../services/rainboot-service';
import { RainBoot } from '../../models/rainboot';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../../models/picture';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  protected rainBootService = inject(RainbootService);
  private route = inject(ActivatedRoute);

  size = signal<number | null>(null);
  pictureNumber = signal<number>(0);

  rainBoot = signal<RainBoot | null>(null);
  
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rainBootService.getRainBootById(id).subscribe({
      next: (response) => {
        this.rainBoot.set(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addToCart() {

  }

  changePictureLeft() {
    if (this.pictureNumber() === 2) {
      this.pictureNumber.set(0);
    }
    else {
      this.pictureNumber.update((number) => number + 1)
    }
  }

  changePictureRight() {
      if (this.pictureNumber() === 0) {
      this.pictureNumber.set(2);
    }
    else {
      this.pictureNumber.update((number) => number - 1)
    }
  }


}
