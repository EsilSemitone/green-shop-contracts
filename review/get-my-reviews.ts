import { TypeOf, z } from "zod";
import { ORDER_BY_REVIEWS_ENUM } from "../enums/order-by-my-reviews.js";
import { ExtendedReviewSchema } from "./extended-review.schema.js";

export const GetMyReviewsRequestQuerySchema = z.object({
    orderBy: z.nativeEnum(ORDER_BY_REVIEWS_ENUM), 
    limit: z.coerce.number().positive(),
    offset: z.coerce.number(),
})

export const GetMyReviewsResponseSchema = z.object({
    reviews: ExtendedReviewSchema.array(),
    page: z.number(),
    totalPage: z.number()
})

export type GetMyReviewsRequestQueryDto  = TypeOf<typeof GetMyReviewsRequestQuerySchema>
export type GetMyReviewsResponseDto  = TypeOf<typeof GetMyReviewsResponseSchema>