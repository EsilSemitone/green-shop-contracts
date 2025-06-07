"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCommentSchema = void 0;
const zod_1 = require("zod");
exports.ReviewCommentSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    review_id: zod_1.z.string().uuid(),
    content: zod_1.z.string(),
    likes_count: zod_1.z.number(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
