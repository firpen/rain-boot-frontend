import { Picture } from "./picture";

export interface RainBoot {
    productId: number,
    productName: string,
    shaftHeight: string,
    size: number,
    color: string,
    price: number,
    pictures: Picture[];
}