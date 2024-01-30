import { Product } from "./product";

export interface OrderProduct {
  id: string;
  product: Product;
  productId: string;
  quantity: number;
  obs: string;
  order: string;
  orderId: string;
}
