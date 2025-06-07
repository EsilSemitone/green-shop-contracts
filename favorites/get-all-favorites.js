"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllFavoritesResponseSchema = void 0;
const zod_1 = require("zod");
exports.GetAllFavoritesResponseSchema = zod_1.z.object({
    payload: zod_1.z.object({
        price: zod_1.z.number(),
        product_variant_id: zod_1.z.string().uuid(),
        uuid: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
        image: zod_1.z.string().nullable()
    }).array()
});
