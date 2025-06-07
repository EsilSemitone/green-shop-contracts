import { TypeOf, z } from "zod";
import { OrderSchema } from "./order.schema";
import { OrderItemSchema } from "./order-item.schema";

export const GetOrderDetailsRequestParamsSchema = z.object({
    orderId: z.string().uuid()
})

export const GetOrderDetailsResponseSchema = OrderSchema.extend({
    items: OrderItemSchema.array()
})

export type GetOrderDetailsRequestParamsDto = TypeOf<typeof GetOrderDetailsRequestParamsSchema>
export type GetOrderDetailsResponseDto = TypeOf<typeof GetOrderDetailsResponseSchema>