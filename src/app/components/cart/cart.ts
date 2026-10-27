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

  onCheckout() {
    const cartId = Number(localStorage.getItem('id'));
    this.cartService.createStripeCheckoutSession(cartId).subscribe({
      next: (response) => {
        console.log(response);
        window.location.href = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
