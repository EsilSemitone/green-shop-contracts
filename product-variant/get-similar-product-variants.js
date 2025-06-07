"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSimilarProductVariantsResponseSchema = exports.GetSimilarProductVariantsRequestSchema = void 0;
const zod_1 = require("zod");
const product_schema_js_1 = require("../product/product.schema.js");
const product_category_js_1 = require("../enums/product-category.js");
exports.GetSimilarProductVariantsRequestSchema = zod_1.z.object({
    category: zod_1.z.nativeEnum(product_category_js_1.PRODUCT_CATEGORY_ENUM).optional(),
    tags_id: zod_1.z.string().uuid().array().optional(),
    limit: zod_1.z.number().positive(),
});
exports.GetSimilarProductVariantsResponseSchema = product_schema_js_1.ProductSchema.pick({
    uuid: true,
    name: true,
})
    .extend({
    product_variant_id: zod_1.z.string().uuid(),
    image: zod_1.z.string().nullable(),
    price: zod_1.z.string(),
})
    .array();
