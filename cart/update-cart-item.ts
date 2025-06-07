import { TypeOf, z } from "zod";
import { CartItemSchema } from "./cart-item-schema.js";

export const UpdateCartItemRequestParamSchema = z.object({
  cartItemUuid: z.string().uuid(),
});

export const UpdateCartItemRequestSchema = CartItemSchema.pick({
  quantity: true,
});

export const UpdateCartItemResponseSchema = CartItemSchema;

export type UpdateCartItemRequestDto = TypeOf<
  typeof UpdateCartItemRequestSchema
>;
export type UpdateCartItemRequestParamDto = TypeOf<
  typeof UpdateCartItemRequestParamSchema
>;

export type UpdateCartItemRequestResponseDto = TypeOf<
  typeof UpdateCartItemResponseSchema
>;
