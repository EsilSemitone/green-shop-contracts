"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedReviewSchema = void 0;
const zod_1 = require("zod");
const review_schema_js_1 = require("./review-schema.js");
const extended_review_comment_js_1 = require("../review-comment/extended-review-comment.js");
exports.ExtendedReviewSchema = review_schema_js_1.ReviewSchema.extend({
    name: zod_1.z.string(),
    image: zod_1.z.string().nullable(),
    liked_by_me: zod_1.z.boolean(),
    comments: extended_review_comment_js_1.ExtendedReviewCommentSchema.extend({
        name: zod_1.z.string(),
        image: zod_1.z.string().nullable(),
    }).array(),
});
