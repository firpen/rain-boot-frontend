import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  protected cartService = inject(CartService);
  protected productService = inject(ProductService);

  onClickShowCart() {
    if (this.cartService.showCart() === false) {
      this.cartService.showCart.set(true);
    } else {
      this.cartService.showCart.set(false);
    }
  }
}
