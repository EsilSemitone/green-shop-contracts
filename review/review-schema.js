"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSchema = void 0;
const zod_1 = require("zod");
exports.ReviewSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    product_id: zod_1.z.string().uuid(),
    product_variant_id: zod_1.z.string().uuid(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    rating: zod_1.z.number(),
    likes_count: zod_1.z.number(),
    verified: zod_1.z.boolean(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
