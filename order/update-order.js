"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderResponseSchema = exports.UpdateOrderRequestSchema = exports.UpdateOrderRequestParamsSchema = void 0;
const zod_1 = require("zod");
const order_schema_1 = require("./order.schema");
exports.UpdateOrderRequestParamsSchema = zod_1.z.object({
    orderUuid: zod_1.z.string().uuid()
});
exports.UpdateOrderRequestSchema = order_schema_1.OrderSchema.pick({
    status: true
});
exports.UpdateOrderResponseSchema = order_schema_1.OrderSchema;
