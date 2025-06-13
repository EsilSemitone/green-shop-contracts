"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderByUuidResponseSchema = exports.GetOrderByUuidRequestParamsSchema = void 0;
const zod_1 = require("zod");
const order_extended_schema_js_1 = require("./order-extended.schema.js");
exports.GetOrderByUuidRequestParamsSchema = zod_1.z.object({
    orderId: zod_1.z.string().uuid(),
});
exports.GetOrderByUuidResponseSchema = zod_1.z.object({
    order: order_extended_schema_js_1.ExtendedOrderSchema,
});
