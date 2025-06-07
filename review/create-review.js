"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewResponseSchema = exports.CreateReviewRequestSchema = void 0;
const review_schema_1 = require("./review-schema");
exports.CreateReviewRequestSchema = review_schema_1.ReviewSchema.pick({
    product_id: true,
    product_variant_id: true,
    title: true,
    description: true,
    rating: true,
});
exports.CreateReviewResponseSchema = review_schema_1.ReviewSchema;
