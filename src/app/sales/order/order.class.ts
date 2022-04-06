import { Customer } from "../customer/customer.class";
import { Orderline } from "../orderline/orderline.class";

export class Order {
    id: number = 0;
    description: string = "";
    shipped: boolean = false;
    total: number = 0;

    customerId: number = 0;
    customer!: Customer; 

    orderlines!: Orderline[];
}