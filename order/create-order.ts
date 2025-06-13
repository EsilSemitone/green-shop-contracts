import { TypeOf, z } from "zod";
import { ExtendedOrderSchema } from "./order-extended.schema.js";
import { PAYMENT_METHOD } from "../enums/payment-method.js";

export const CreateOrderRequestSchema = z.object({
  payment_method: z.nativeEnum(PAYMENT_METHOD),
  address_id: z.string(),
});

export const CreateOrderResponseSchema = z.object({
  isSuccess: z.boolean(),
  payload: z.object({
    data: ExtendedOrderSchema.optional(),
    payment_link: z.string().optional(),
  }),
});

export type CreateOrderRequestDto = TypeOf<typeof CreateOrderRequestSchema>;
export type CreateOrderResponseDto = TypeOf<typeof CreateOrderResponseSchema>;
