import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-order-complete',
  standalone: false,
  templateUrl: './order-complete.html',
  styleUrl: './order-complete.css',
})
export class OrderComplete {

  private cartService = inject(CartService);

  ngOnInit() {
    localStorage.removeItem('id');
    this.cartService.cart.set([]);
  }
}
