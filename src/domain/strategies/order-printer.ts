import { Order } from "../entities/order";
import { PrintableDocument } from "./printable-document";

export interface OrderPrinter extends PrintableDocument<Order> {}
