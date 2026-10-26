import { Picture } from "./picture";

export interface Umbrella {
    productId: number,
    productName: string,
    price: number;
    color: string,
    pictures: Picture[]
}