import { TypeOf, z } from "zod";
import { CartItemSchema } from "./cart-item-schema.js";

export const GetCartItemsResponseSchema = CartItemSchema.array();

export type GetCartItemsResponseDto = TypeOf<typeof GetCartItemsResponseSchema>;
