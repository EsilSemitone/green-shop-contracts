import { TypeOf, z } from "zod";
import { ORDER_BY_REVIEWS_ENUM } from "../enums/order-by-my-reviews.js";
import { ExtendedReviewSchema } from "./extended-review.schema.js";

export const GetProductReviewsRequestParamsSchema = z.object({
    productId: z.string().uuid(),
})

export const GetProductReviewsRequestQuerySchema = z.object({
    variant_id: z.string().uuid().optional(),
    orderBy: z.nativeEnum(ORDER_BY_REVIEWS_ENUM), 
    limit: z.coerce.number().positive(),
    offset: z.coerce.number(),
})

export const GetProductReviewsResponseSchema = z.object({
    reviews: ExtendedReviewSchema.array(),
    page: z.number(),
    totalPage: z.number()
})

export type GetProductReviewsRequestParamsDto  = TypeOf<typeof GetProductReviewsRequestParamsSchema>
export type GetProductReviewsRequestQueryDto  = TypeOf<typeof GetProductReviewsRequestQuerySchema>
export type GetProductReviewsResponseDto  = TypeOf<typeof GetProductReviewsResponseSchema>