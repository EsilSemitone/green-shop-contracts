"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveToFavoritesResponseSchema = exports.RemoveToFavoritesRequestSchema = void 0;
const zod_1 = require("zod");
exports.RemoveToFavoritesRequestSchema = zod_1.z.object({
    product_variant_id: zod_1.z.string().uuid()
});
exports.RemoveToFavoritesResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
