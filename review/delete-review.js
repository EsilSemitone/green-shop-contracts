"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReviewResponseSchema = exports.DeleteReviewRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteReviewRequestParamsSchema = zod_1.z.object({
    reviewId: zod_1.z.string().uuid()
});
exports.DeleteReviewResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
