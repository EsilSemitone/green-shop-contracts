"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductResponseSchema = exports.DeleteProductRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteProductRequestParamsSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid()
});
exports.DeleteProductResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
