"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAddressResponseSchema = exports.DeleteAddressRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteAddressRequestParamsSchema = zod_1.z.object({
    addressUuid: zod_1.z.string().uuid()
});
exports.DeleteAddressResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
