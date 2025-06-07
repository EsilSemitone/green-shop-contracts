"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const zod_1 = require("zod");
const order_status_ts_1 = require("../enums/order-status.js");
const payment_method_ts_1 = require("../enums/payment-method.js");
const address_schema_ts_1 = require("../address/address.schema.js");
exports.OrderSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    status: zod_1.z.nativeEnum(order_status_ts_1.ORDER_STATUS),
    total_price: zod_1.z.number(),
    shipping_price: zod_1.z.number(),
    payment_method: zod_1.z.nativeEnum(payment_method_ts_1.PAYMENT_METHOD),
    payment_id: zod_1.z.string().nullable(),
    address: address_schema_ts_1.AddressSchema.pick({
        city: true,
        street_address: true,
        phone_number: true
    }),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
