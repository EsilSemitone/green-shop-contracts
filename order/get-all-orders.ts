import { TypeOf, z } from "zod";
import { ORDER_STATUS } from "../enums/order-status.ts";
import { ORDER_BY_ORDERS_ENUM } from "../enums/order-by-orders.ts";
import { OrderSchema } from "./order.schema.ts";
import { PAYMENT_METHOD } from "../enums/payment-method.ts";

export const GetAllOrdersRequestQuerySchema = z.object({
    status: z.nativeEnum(ORDER_STATUS).optional(),
    payment_method: z.nativeEnum(PAYMENT_METHOD).optional(),
    orderBy: z.nativeEnum(ORDER_BY_ORDERS_ENUM),
    limit: z.coerce.number().min(1),
    offset: z.coerce.number().min(0)
})

export const GetAllOrdersResponseSchema = z.object({
    orders: OrderSchema.array(),
    page: z.number(),
    totalPage: z.number()
})

export type GetAllOrdersRequestQueryDto = TypeOf<typeof GetAllOrdersRequestQuerySchema>
export type GetAllOrdersResponseDto = TypeOf<typeof GetAllOrdersResponseSchema>