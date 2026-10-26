import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  protected cartService = inject(CartService);

  sum = computed(() => 
  this.cartService.cart().reduce(
    (total, item) => total + item.quantity * item.product.price, 0)
  )
}
