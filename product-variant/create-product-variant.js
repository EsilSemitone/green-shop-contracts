"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductVariantResponseSchema = exports.CreateProductVariantRequestParamsSchema = exports.CreateProductVariantRequestSchema = void 0;
const zod_1 = require("zod");
const product_variant_schema_ts_1 = require("./product-variant.schema.js");
exports.CreateProductVariantRequestSchema = product_variant_schema_ts_1.ProductVariantSchema.pick({
    price: true,
    size: true,
    stock: true,
}).extend({
    tags: zod_1.z.string().array().optional()
});
exports.CreateProductVariantRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid()
});
exports.CreateProductVariantResponseSchema = product_variant_schema_ts_1.ProductVariantSchema;
