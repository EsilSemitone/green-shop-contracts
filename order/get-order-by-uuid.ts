import { TypeOf, z } from "zod";
import { ExtendedOrderSchema } from "./order-extended.schema.js";

export const GetOrderByUuidRequestParamsSchema = z.object({
  orderId: z.string().uuid(),
});

export const GetOrderByUuidResponseSchema = z.object({
  order: ExtendedOrderSchema,
});

export type GetOrderByUuidRequestParamsDto = TypeOf<
  typeof GetOrderByUuidRequestParamsSchema
>;
export type GetOrderByUuidResponseDto = TypeOf<
  typeof GetOrderByUuidResponseSchema
>;
