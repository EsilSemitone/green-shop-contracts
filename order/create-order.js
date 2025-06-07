"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderResponseSchema = exports.CreateOrderRequestSchema = void 0;
const zod_1 = require("zod");
const order_extended_schema_js_1 = require("./order-extended.schema.js");
const payment_method_js_1 = require("../enums/payment-method.js");
exports.CreateOrderRequestSchema = zod_1.z.object({
    payment_method: zod_1.z.nativeEnum(payment_method_js_1.PAYMENT_METHOD),
    address_id: zod_1.z.string(),
});
exports.CreateOrderResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean(),
    payload: zod_1.z.object({
        data: order_extended_schema_js_1.ExtendedOrderSchema.optional(),
        payment_link: zod_1.z.string().optional(),
    }),
});
