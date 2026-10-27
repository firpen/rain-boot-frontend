import { Component, inject, signal } from '@angular/core';
import { RainbootService } from '../../services/rainboot-service';
import { RainBoot } from '../../models/rainboot';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../models/cartitem';
import { Umbrella } from '../../models/umbrella';
import { ProductService } from '../../services/product-service';
import { UmbrellaService } from '../../services/umbrella-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  private rainBootService = inject(RainbootService);
  private umbrellaService = inject(UmbrellaService);
  private cartService = inject(CartService);
  protected productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  quantity = signal(1);
  size = signal<number | null>(null);
  product = signal<RainBoot | Umbrella | null>(null);
  cartItem = signal<CartItem | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productService.showAccessoires() === true) {
      this.umbrellaService.getUmbrellaById(id).subscribe({
        next: (response) => {
          this.product.set(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.rainBootService.getRainBootById(id).subscribe({
        next: (response) => {
          this.product.set(response);
          this.size.set(response.size)
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  addToCart() {
    if (this.product() !== null) {
      this.cartItem.set({
        quantity: this.quantity(),
        product: this.product()!,
        size: this.size()!,
        cartId: Number(localStorage.getItem('id')),
      });
      this.cartService.addProductToCart(this.cartItem()!).subscribe({
        next: (response) => {
          console.log(response);
          this.cartService.cart.update((cart) => [
            ...cart, 
            response.cartItems[response.cartItems.length - 1],
          ]);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
