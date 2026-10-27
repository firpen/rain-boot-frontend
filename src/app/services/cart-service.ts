import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { environment } from '../../environments/environment';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  showCart = signal(false);
  cart = signal<CartItem[]>([]);

  private http = inject(HttpClient);

  addProductToCart(cartItem: CartItem): Observable<Cart> {
    return this.http.post<Cart>(`${environment.backendUrl}/cart/items`, cartItem);
  }

  createCart(): Observable<Cart> { 
    return this.http.post<Cart>(`${environment.backendUrl}/cart/cart`, null)
  }

  getCartById(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${environment.backendUrl}/cart/${cartId}`);
  }

  createStripeCheckoutSession(cartId: number): Observable<string> {
    return this.http.post(`${environment.backendUrl}/stripe/create-checkout-session`, cartId, { responseType: 'text' })
  }
}
