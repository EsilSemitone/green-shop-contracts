import { TypeOf } from "zod";
import { OrderItemSchema } from "./order-item.schema.js";
import { OrderSchema } from "./order.schema.js";

export const ExtendedOrderSchema = OrderSchema.extend({
    items: OrderItemSchema.array()
})

export type ExtendedOrder = TypeOf<typeof ExtendedOrderSchema>