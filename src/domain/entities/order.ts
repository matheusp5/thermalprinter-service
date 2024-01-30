import { OrderProduct } from "./order-products";

export interface Order {
  id: string;
  randomId: number;
  consumerName: string;
  orderProducts: OrderProduct[];
  status: string;
  closed: boolean;
  closedAt: string;
  createdAt: string;
}
