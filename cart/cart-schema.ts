import { z } from "zod";

export const CartSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(),
    created_at: z.date(),
    updated_at: z.date(),
})