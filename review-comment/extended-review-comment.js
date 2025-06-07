"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedReviewCommentSchema = void 0;
const zod_1 = require("zod");
const review_comment_schema_js_1 = require("./review-comment.schema.js");
exports.ExtendedReviewCommentSchema = review_comment_schema_js_1.ReviewCommentSchema.extend({
    liked_by_me: zod_1.z.boolean(),
    name: zod_1.z.string(),
    image: zod_1.z.string().nullable(),
});
