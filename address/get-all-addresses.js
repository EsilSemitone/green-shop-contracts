"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllAddressesResponseSchema = void 0;
const zod_1 = require("zod");
const address_schema_1 = require("./address.schema");
exports.GetAllAddressesResponseSchema = zod_1.z.object({
    addresses: address_schema_1.AddressSchema.array()
});
