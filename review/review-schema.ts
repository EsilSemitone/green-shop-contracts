import { TypeOf, z } from "zod";

export const ReviewSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(),
    product_id: z.string().uuid(),
    product_variant_id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    rating: z.number(),
    likes_count: z.number(),
    verified: z.boolean(),
    created_at: z.date(),
    updated_at: z.date(),
})  

export type Review = TypeOf<typeof ReviewSchema>