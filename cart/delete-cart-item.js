"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartItemResponseSchema = exports.DeleteCartItemRequestParamSchema = void 0;
const zod_1 = require("zod");
exports.DeleteCartItemRequestParamSchema = zod_1.z.object({
    cartItemUuid: zod_1.z.string().uuid(),
});
exports.DeleteCartItemResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean(),
});
