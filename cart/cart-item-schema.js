"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemSchema = void 0;
const zod_1 = require("zod");
exports.CartItemSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    cart_id: zod_1.z.string().uuid(),
    product_variant_id: zod_1.z.string().uuid(),
    quantity: zod_1.z.number().positive(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
