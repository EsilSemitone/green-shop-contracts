import { TypeOf, z } from "zod";
import { ReviewSchema } from "./review-schema.js";
import { ReviewCommentSchema } from "../review-comment/review-comment.schema.js";
import { ExtendedReviewCommentSchema } from "../review-comment/extended-review-comment.js";

export const ExtendedReviewSchema = ReviewSchema.extend({
        name: z.string(),
        image: z.string().nullable(),
        liked_by_me: z.boolean(),
        comments: ExtendedReviewCommentSchema.extend({
            name: z.string(),
            image: z.string().nullable(),
        }).array()
    })

export type ExtendedReview = TypeOf<typeof ExtendedReviewSchema>