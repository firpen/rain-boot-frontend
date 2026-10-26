import { Component, inject, signal } from '@angular/core';
import { CartService } from './services/cart-service';
import { ChatBotService } from './services/chat-bot-service';
import { CartItem } from './models/cartitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {

  protected chatBotService = inject(ChatBotService);
  protected cartService = inject(CartService);

  ngOnInit() {
    const savedId = localStorage.getItem('id');
    if (savedId === null) {
      this.cartService.createCart().subscribe({
        next: (response) => {
          localStorage.setItem('id', response.cartId.toString());
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      const cartId = Number(savedId);
      this.cartService.getCartById(cartId).subscribe({
        next: (response) => {
          this.cartService.cart.set(response.cartItems);
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
