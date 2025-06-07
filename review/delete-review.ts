import { TypeOf, z } from "zod";

export const DeleteReviewRequestParamsSchema = z.object({
    reviewId: z.string().uuid()
})

export const DeleteReviewResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteReviewRequestParamsDto = TypeOf<typeof DeleteReviewRequestParamsSchema>
export type DeleteReviewResponseDto = TypeOf<typeof DeleteReviewResponseSchema>