"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductVariantResponseSchema = exports.UpdateProductVariantRequestParamsSchema = exports.UpdateProductVariantRequestSchema = void 0;
const zod_1 = require("zod");
const product_variant_schema_ts_1 = require("./product-variant.schema.js");
exports.UpdateProductVariantRequestSchema = product_variant_schema_ts_1.ProductVariantSchema.pick({
    rating: true,
    price: true,
    size: true,
    stock: true,
}).partial();
exports.UpdateProductVariantRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid(),
    uuid: zod_1.z.string().uuid(),
});
exports.UpdateProductVariantResponseSchema = product_variant_schema_ts_1.ProductVariantSchema;
