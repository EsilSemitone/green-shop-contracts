import { TypeOf, z } from "zod";
import { CartItemSchema } from "./cart-item-schema.js";


export const SyncCartRequestSchema = z.object({
    items: CartItemSchema.pick({
        product_variant_id: true,
        quantity: true,
    }).array()} 
)  

export const SyncCartResponseSchema = CartItemSchema.pick({
    uuid: true,
    product_variant_id: true,
    quantity: true
}).array()

export type SyncCartRequestDto = TypeOf<typeof SyncCartRequestSchema>

export type SyncCartResponseDto = TypeOf<typeof SyncCartResponseSchema>