"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductResponseSchema = exports.CreateProductRequestSchema = void 0;
const product_schema_js_1 = require("./product.schema.js");
exports.CreateProductRequestSchema = product_schema_js_1.ProductSchema.pick({
    name: true,
    short_description: true,
    description: true,
    category: true,
    images: true
});
exports.CreateProductResponseSchema = product_schema_js_1.ProductSchema;
