"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutSchemaResponse = void 0;
const zod_1 = require("zod");
exports.LogoutSchemaResponse = zod_1.z.object({
    isSuccess: zod_1.z.boolean(),
});
