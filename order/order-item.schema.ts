import { TypeOf, z } from "zod";

export const OrderItemSchema = z.object({
    uuid: z.string().uuid(),
    order_id: z.string().uuid(), 
    product_variant_id: z.string().uuid(), 
    quantity: z.number(),
    price: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
})

export type OrderItem = TypeOf<typeof OrderItemSchema>