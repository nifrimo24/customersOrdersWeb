export class CustomerRequest {
    name: string = '';
    lastName: string = '';
}

export class OrderResponse {
    id: string = "";
    customerId: number = 0;
    orderProducts: OrderProductResponse[] = [];
}

export interface OrderProductResponse {
    productId: number;
    unitPrice: number;
    quantity: number;
}

export class ProductResponse {
    id: number = 0;
    name: string = '';
    unitPrice: number = 0;
}