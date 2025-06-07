"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewCommentResponseSchema = exports.CreateReviewCommentRequestSchema = exports.CreateReviewCommentRequestParamsSchema = void 0;
const review_comment_schema_1 = require("./review-comment.schema");
const zod_1 = require("zod");
exports.CreateReviewCommentRequestParamsSchema = zod_1.z.object({
    reviewId: zod_1.z.string().uuid()
});
exports.CreateReviewCommentRequestSchema = review_comment_schema_1.ReviewCommentSchema.pick({
    content: true
});
exports.CreateReviewCommentResponseSchema = review_comment_schema_1.ReviewCommentSchema;
