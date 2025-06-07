import { z } from "zod";

export const CartItemSchema = z.object({
    uuid: z.string().uuid(),
    cart_id: z.string().uuid(),
    product_variant_id: z.string().uuid(),
    quantity: z.number().positive(),
    created_at: z.date(),
    updated_at: z.date(),
})