import { TypeOf, z } from "zod";
import { ReviewCommentSchema } from "./review-comment.schema.js";

export const ExtendedReviewCommentSchema = ReviewCommentSchema.extend({
    liked_by_me: z.boolean(),
    name: z.string(),
    image: z.string().nullable(),
})

export type ExtendedReviewComment = TypeOf<typeof ExtendedReviewCommentSchema>