"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressResponseSchema = exports.UpdateAddressRequestSchema = exports.UpdateAddressRequestParamsSchema = void 0;
const zod_1 = require("zod");
const address_schema_js_1 = require("./address.schema.js");
exports.UpdateAddressRequestParamsSchema = zod_1.z.object({
    addressUuid: zod_1.z.string().uuid()
});
exports.UpdateAddressRequestSchema = address_schema_js_1.AddressSchema.pick({
    city: true,
    street_address: true,
    phone_number: true
}).partial();
exports.UpdateAddressResponseSchema = address_schema_js_1.AddressSchema;
