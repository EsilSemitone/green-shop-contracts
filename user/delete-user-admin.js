"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserAdminResponseSchema = exports.DeleteUserAdminRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteUserAdminRequestParamsSchema = zod_1.z.object({
    userUuid: zod_1.z.string().uuid()
});
exports.DeleteUserAdminResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
