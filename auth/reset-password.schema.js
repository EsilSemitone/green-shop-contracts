"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordSchemaResponse = exports.ResetPasswordSchemaRequest = void 0;
const zod_1 = require("zod");
exports.ResetPasswordSchemaRequest = zod_1.z.object({
    restore_code: zod_1.z.string(),
    password: zod_1.z.string().min(8),
});
exports.ResetPasswordSchemaResponse = zod_1.z.object({
    isSuccess: zod_1.z.boolean(),
});
