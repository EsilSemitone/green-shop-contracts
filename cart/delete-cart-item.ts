import { TypeOf, z } from "zod";

export const DeleteCartItemRequestParamSchema = z.object({
  cartItemUuid: z.string().uuid(),
});

export const DeleteCartItemResponseSchema = z.object({
  isSuccess: z.boolean(),
});

export type DeleteCartItemRequestParamDto = TypeOf<
  typeof DeleteCartItemRequestParamSchema
>;

export type DeleteCartItemResponseDto = TypeOf<
  typeof DeleteCartItemResponseSchema
>;
