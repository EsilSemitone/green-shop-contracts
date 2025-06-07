import { TypeOf, z } from "zod";
import { OrderSchema } from "./order.schema.js";

export const GetMyOrdersResponseSchema = z.object({
    orders: OrderSchema.array(),
})  

export type GetMyOrdersResponseDto = TypeOf<typeof GetMyOrdersResponseSchema>
