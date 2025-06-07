"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductVariantsByProductResponseSchema = exports.GetProductVariantsByProductRequestParamsSchema = void 0;
const zod_1 = require("zod");
const product_variant_schema_ts_1 = require("./product-variant.schema.js");
const product_schema_ts_1 = require("../product/product.schema.js");
exports.GetProductVariantsByProductRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid()
});
exports.GetProductVariantsByProductResponseSchema = product_schema_ts_1.ProductSchema.extend({
    variants: product_variant_schema_ts_1.ProductVariantSchema.extend({
        tags: zod_1.z.string().array(),
        tags_id: zod_1.z.string().array(),
    }).array()
});
