import { inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { CartService } from './cart-service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cartService = inject(CartService);

  showAccessoires = signal(false);

  pictureNumber = signal<number>(0);

  addToCart(cartItem: CartItem) {
    this.cartService.addProductToCart(cartItem).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changePictureLeft() {
    if (this.pictureNumber() === 2) {
      this.pictureNumber.set(0);
    } else {
      this.pictureNumber.update((number) => number + 1);
    }
  }

  changePictureRight() {
    if (this.pictureNumber() === 0) {
      this.pictureNumber.set(2);
    } else {
      this.pictureNumber.update((number) => number - 1);
    }
  }

  onClickShowAccessoires() {
    this.showAccessoires.set(true);
  }

  onClickShowRainboots() {
    this.showAccessoires.set(false);
  }
}
