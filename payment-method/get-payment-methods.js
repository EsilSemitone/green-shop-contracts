"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentMethodsResponseSchema = void 0;
const zod_1 = require("zod");
const payment_method_schema_ts_1 = require("./payment-method.schema.js");
exports.GetPaymentMethodsResponseSchema = zod_1.z.object({
    methods: payment_method_schema_ts_1.PaymentMethodSchema.array()
});
