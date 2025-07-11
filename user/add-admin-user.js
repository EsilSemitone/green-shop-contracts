"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAdminUserResponseSchema = exports.AddAdminUserRequestSchema = void 0;
const zod_1 = require("zod");
exports.AddAdminUserRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.AddAdminUserResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
