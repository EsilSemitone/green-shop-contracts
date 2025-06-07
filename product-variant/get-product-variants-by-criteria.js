"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductVariantsByCriteriaResponseSchema = exports.GetProductVariantsByCriteriaRequestQuerySchema = exports.GetProductVariantsByCriteriaRequestParamsSchema = void 0;
const zod_1 = require("zod");
const product_schema_js_1 = require("../product/product.schema.js");
const product_category_js_1 = require("../enums/product-category.js");
const size_js_1 = require("../enums/size.js");
exports.GetProductVariantsByCriteriaRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid(),
});
exports.GetProductVariantsByCriteriaRequestQuerySchema = zod_1.z.object({
    category: zod_1.z.nativeEnum(product_category_js_1.PRODUCT_CATEGORY_ENUM).optional(),
    size: zod_1.z.nativeEnum(size_js_1.SIZE).optional(),
    priceFrom: zod_1.z.coerce.number().optional(),
    priceTo: zod_1.z.coerce.number().optional(),
    search: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().positive(),
    offset: zod_1.z.coerce.number(),
});
exports.GetProductVariantsByCriteriaResponseSchema = zod_1.z.object({
    products: product_schema_js_1.ProductSchema.pick({
        uuid: true,
        name: true,
    })
        .extend({
        product_variant_id: zod_1.z.string().uuid(),
        image: zod_1.z.string().nullable(),
        price: zod_1.z.number(),
    })
        .array(),
    page: zod_1.z.number(),
    totalPage: zod_1.z.number(),
});
