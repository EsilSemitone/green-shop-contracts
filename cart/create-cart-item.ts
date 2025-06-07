import { TypeOf, z } from "zod";
import { CartItemSchema } from "./cart-item-schema.js";


export const CreateCartItemRequestSchema = CartItemSchema.pick({
    product_variant_id: true,
    quantity: true,
})

export const CreateCartItemResponseSchema = CartItemSchema

export type CreateCartItemRequestDto = TypeOf<typeof CreateCartItemRequestSchema>

export type CreateCartItemRequestResponseDto = TypeOf<typeof CreateCartItemResponseSchema>