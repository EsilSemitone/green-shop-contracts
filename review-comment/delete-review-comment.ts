import { TypeOf, z } from "zod";

export const DeleteReviewCommentRequestParamsSchema = z.object({
    reviewId:  z.string().uuid(),
    commentId: z.string().uuid()
})

export const DeleteReviewCommentResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteReviewCommentRequestParamsDto = TypeOf<typeof DeleteReviewCommentRequestParamsSchema>
export type DeleteReviewCommentResponseDto = TypeOf<typeof DeleteReviewCommentResponseSchema>