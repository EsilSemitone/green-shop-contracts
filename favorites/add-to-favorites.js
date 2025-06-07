"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToFavoritesResponseSchema = exports.AddToFavoritesRequestSchema = void 0;
const zod_1 = require("zod");
exports.AddToFavoritesRequestSchema = zod_1.z.object({
    product_variant_id: zod_1.z.string().uuid()
});
exports.AddToFavoritesResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
