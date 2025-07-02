"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = void 0;
const zod_1 = require("zod");
exports.AddressSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    city: zod_1.z.string().min(2, 'Горол должен состоять хотя бы из двух символов'),
    street_address: zod_1.z.string().min(2, 'Адрес должен состоять хотя бы из двух символов'),
    phone_number: zod_1.z.string().nullable(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
