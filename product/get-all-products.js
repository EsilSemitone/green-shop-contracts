"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductsResponseSchema = exports.GetAllProductsRequestQuerySchema = void 0;
const zod_1 = require("zod");
const product_schema_ts_1 = require("./product.schema.js");
exports.GetAllProductsRequestQuerySchema = zod_1.z.object({
    search: zod_1.z.string().max(30).optional(),
    limit: zod_1.z.coerce.number().positive(),
    offset: zod_1.z.coerce.number(),
});
exports.GetAllProductsResponseSchema = zod_1.z.object({
    products: product_schema_ts_1.ProductSchema.array(),
    page: zod_1.z.number(),
    totalPage: zod_1.z.number()
});
