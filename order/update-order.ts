import { TypeOf, z } from "zod";
import { OrderSchema } from "./order.schema";

export const UpdateOrderRequestParamsSchema = z.object({
    orderUuid: z.string().uuid()
})

export const UpdateOrderRequestQuerySchema = OrderSchema.pick({
    status: true
})

export const UpdateOrderResponseSchema = OrderSchema

export type UpdateOrderRequestParamsDto = TypeOf<typeof UpdateOrderRequestParamsSchema>
export type UpdateOrderRequestQueryDto= TypeOf<typeof UpdateOrderRequestQuerySchema>

export type UpdateOrderResponseDto= TypeOf<typeof UpdateOrderResponseSchema>