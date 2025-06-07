import { ReviewCommentSchema } from "./review-comment.schema";
import { TypeOf, z } from "zod";

export const CreateReviewCommentRequestParamsSchema = z.object({
    reviewId: z.string().uuid()
})

export const CreateReviewCommentRequestSchema = ReviewCommentSchema.pick({
    content: true
})

export const CreateReviewCommentResponseSchema = ReviewCommentSchema

export type CreateReviewCommentRequestParamsDto = TypeOf<typeof CreateReviewCommentRequestParamsSchema>
export type CreateReviewCommentRequestDto = TypeOf<typeof CreateReviewCommentRequestSchema>
export type CreateReviewCommentResponseDto = TypeOf<typeof CreateReviewCommentResponseSchema>