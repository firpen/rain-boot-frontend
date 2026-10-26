import { CartItem } from "./cartitem";

export interface Cart {
    cartId: number,
    cartItems: CartItem[]
}