"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = require("zod");
const product_category_js_1 = require("../enums/product-category.js");
exports.ProductSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
    short_description: zod_1.z.string(),
    description: zod_1.z.string(),
    category: zod_1.z.nativeEnum(product_category_js_1.PRODUCT_CATEGORY_ENUM),
    images: zod_1.z.string().array(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
