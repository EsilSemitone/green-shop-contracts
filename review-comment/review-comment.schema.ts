import { z } from "zod";

export const ReviewCommentSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(),
    review_id: z.string().uuid(),
    content: z.string(),
    likes_count: z.number(),
    created_at: z.date(),
    updated_at: z.date(),

})
