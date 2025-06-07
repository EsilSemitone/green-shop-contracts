"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyOrdersResponseSchema = void 0;
const zod_1 = require("zod");
const order_schema_js_1 = require("./order.schema.js");
exports.GetMyOrdersResponseSchema = zod_1.z.object({
    orders: order_schema_js_1.OrderSchema.array(),
});
