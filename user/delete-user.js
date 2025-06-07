"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserResponseSchema = void 0;
const zod_1 = require("zod");
exports.DeleteUserResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
