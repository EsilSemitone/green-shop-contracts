"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressResponseSchema = exports.CreateAddressRequestSchema = void 0;
const zod_1 = require("zod");
const address_schema_ts_1 = require("./address.schema.js");
exports.CreateAddressRequestSchema = address_schema_ts_1.AddressSchema.pick({
    city: true,
    street_address: true,
}).extend({
    phone_number: zod_1.z.string().optional(),
});
exports.CreateAddressResponseSchema = address_schema_ts_1.AddressSchema;
