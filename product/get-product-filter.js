"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductFilterResponseSchema = void 0;
const zod_1 = require("zod");
const product_category_js_1 = require("../enums/product-category.js");
const size_js_1 = require("../enums/size.js");
exports.GetProductFilterResponseSchema = zod_1.z.object({
    categories: zod_1.z.array(zod_1.z.object({
        category: zod_1.z.nativeEnum(product_category_js_1.PRODUCT_CATEGORY_ENUM),
        count: zod_1.z.number()
    })),
    sizes: zod_1.z.array(zod_1.z.object({
        size: zod_1.z.nativeEnum(size_js_1.SIZE),
        count: zod_1.z.number()
    })),
    prices: zod_1.z.object({
        min: zod_1.z.number(),
        max: zod_1.z.number(),
    })
});
