"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductVariantResponseSchema = exports.DeleteProductVariantRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteProductVariantRequestParamsSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid(),
    uuid: zod_1.z.string().uuid(),
});
exports.DeleteProductVariantResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
