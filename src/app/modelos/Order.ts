import { OrderProduct } from "./OrderProduct";

export interface Order {
    id: string;
    customerId: number;
    orderProducts: OrderProduct[];
}