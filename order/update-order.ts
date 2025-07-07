import { TypeOf, z } from "zod";
import { OrderSchema } from "./order.schema";

export const UpdateOrderRequestParamsSchema = z.object({
    orderUuid: z.string().uuid()
})

export const UpdateOrderRequestSchema = OrderSchema.pick({
    status: true,
    payment_method: true
}).partial()

export const UpdateOrderResponseSchema = OrderSchema

export type UpdateOrderRequestParamsDto = TypeOf<typeof UpdateOrderRequestParamsSchema>
export type UpdateOrderRequestDto= TypeOf<typeof UpdateOrderRequestSchema>

export type UpdateOrderResponseDto= TypeOf<typeof UpdateOrderResponseSchema>