"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByUuidResponseSchema = exports.GetProductByUuidRequestParamsSchema = void 0;
const zod_1 = require("zod");
const product_schema_js_1 = require("./product.schema.js");
exports.GetProductByUuidRequestParamsSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid()
});
exports.GetProductByUuidResponseSchema = product_schema_js_1.ProductSchema;
