"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductResponseSchema = exports.UpdateProductRequestParamsSchema = exports.UpdateProductRequestSchema = void 0;
const zod_1 = require("zod");
const product_schema_js_1 = require("./product.schema.js");
exports.UpdateProductRequestSchema = product_schema_js_1.ProductSchema.pick({
    name: true,
    short_description: true,
    description: true,
    category: true,
    images: true
}).partial();
exports.UpdateProductRequestParamsSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid()
});
exports.UpdateProductResponseSchema = product_schema_js_1.ProductSchema;
