"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductVariantByUuidResponseSchema = exports.GetProductVariantByUuidRequestParamsSchema = void 0;
const zod_1 = require("zod");
const product_schema_js_1 = require("../product/product.schema.js");
exports.GetProductVariantByUuidRequestParamsSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
});
exports.GetProductVariantByUuidResponseSchema = product_schema_js_1.ProductSchema.pick({
    uuid: true,
    name: true,
}).extend({
    product_variant_id: zod_1.z.string().uuid(),
    image: zod_1.z.string().nullable(),
    price: zod_1.z.number(),
    tags_id: zod_1.z.string().array()
});
