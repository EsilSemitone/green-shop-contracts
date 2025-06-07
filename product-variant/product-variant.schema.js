"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantSchema = void 0;
const zod_1 = require("zod");
const size_ts_1 = require("../enums/size.js");
exports.ProductVariantSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    product_id: zod_1.z.string().uuid(),
    rating: zod_1.z.number(),
    price: zod_1.z.number(),
    size: zod_1.z.nativeEnum(size_ts_1.SIZE),
    stock: zod_1.z.number(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
