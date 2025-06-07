"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodSchema = void 0;
const zod_1 = require("zod");
exports.PaymentMethodSchema = zod_1.z.object({
    uuid: zod_1.z.string(),
    price: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
