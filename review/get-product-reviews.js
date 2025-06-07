"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductReviewsResponseSchema = exports.GetProductReviewsRequestQuerySchema = exports.GetProductReviewsRequestParamsSchema = void 0;
const zod_1 = require("zod");
const order_by_my_reviews_js_1 = require("../enums/order-by-my-reviews.js");
const extended_review_schema_js_1 = require("./extended-review.schema.js");
exports.GetProductReviewsRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid(),
});
exports.GetProductReviewsRequestQuerySchema = zod_1.z.object({
    variant_id: zod_1.z.string().uuid().optional(),
    orderBy: zod_1.z.nativeEnum(order_by_my_reviews_js_1.ORDER_BY_REVIEWS_ENUM),
    limit: zod_1.z.coerce.number().positive(),
    offset: zod_1.z.coerce.number(),
});
exports.GetProductReviewsResponseSchema = zod_1.z.object({
    reviews: extended_review_schema_js_1.ExtendedReviewSchema.array(),
    page: zod_1.z.number(),
    totalPage: zod_1.z.number()
});
