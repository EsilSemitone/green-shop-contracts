import { TypeOf } from "zod";
import { ReviewSchema } from "./review-schema";

export const CreateReviewRequestSchema = ReviewSchema.pick({
    product_id: true,
    product_variant_id: true,
    title: true,
    description: true,
    rating: true,
})

export const CreateReviewResponseSchema = ReviewSchema


export type CreateReviewRequestDto = TypeOf<typeof CreateReviewRequestSchema>
export type CreateReviewResponseDto = TypeOf<typeof CreateReviewResponseSchema>