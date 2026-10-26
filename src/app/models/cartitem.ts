import { Product } from "./product";

export interface CartItem {
    quantity: number,
    product: Product,
    size: number | null,
    cartId: number
}