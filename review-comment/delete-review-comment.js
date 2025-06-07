"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReviewCommentResponseSchema = exports.DeleteReviewCommentRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteReviewCommentRequestParamsSchema = zod_1.z.object({
    reviewId: zod_1.z.string().uuid(),
    commentId: zod_1.z.string().uuid()
});
exports.DeleteReviewCommentResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
