"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllOrdersResponseSchema = exports.GetAllOrdersRequestQuerySchema = void 0;
const zod_1 = require("zod");
const order_status_ts_1 = require("../enums/order-status.js");
const order_by_orders_ts_1 = require("../enums/order-by-orders.js");
const order_schema_ts_1 = require("./order.schema.js");
const payment_method_ts_1 = require("../enums/payment-method.js");
exports.GetAllOrdersRequestQuerySchema = zod_1.z.object({
    status: zod_1.z.nativeEnum(order_status_ts_1.ORDER_STATUS).optional(),
    payment_method: zod_1.z.nativeEnum(payment_method_ts_1.PAYMENT_METHOD).optional(),
    orderBy: zod_1.z.nativeEnum(order_by_orders_ts_1.ORDER_BY_ORDERS_ENUM),
    limit: zod_1.z.coerce.number().min(1),
    offset: zod_1.z.coerce.number().min(0)
});
exports.GetAllOrdersResponseSchema = zod_1.z.object({
    orders: order_schema_ts_1.OrderSchema.array(),
    page: zod_1.z.number(),
    totalPage: zod_1.z.number()
});
