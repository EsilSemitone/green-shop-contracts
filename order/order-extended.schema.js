"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedOrderSchema = void 0;
const order_item_schema_js_1 = require("./order-item.schema.js");
const order_schema_js_1 = require("./order.schema.js");
exports.ExtendedOrderSchema = order_schema_js_1.OrderSchema.extend({
    items: order_item_schema_js_1.OrderItemSchema.array()
});
