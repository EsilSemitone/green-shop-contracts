"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderDetailsResponseSchema = exports.GetOrderDetailsRequestParamsSchema = void 0;
const zod_1 = require("zod");
const order_schema_1 = require("./order.schema");
const order_item_schema_1 = require("./order-item.schema");
exports.GetOrderDetailsRequestParamsSchema = zod_1.z.object({
    orderId: zod_1.z.string().uuid()
});
exports.GetOrderDetailsResponseSchema = order_schema_1.OrderSchema.extend({
    items: order_item_schema_1.OrderItemSchema.array()
});
