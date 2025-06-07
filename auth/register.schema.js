"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchemaResponse = exports.RegisterSchemaRequest = void 0;
const zod_1 = require("zod");
exports.RegisterSchemaRequest = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email("email должен быть email"),
    password: zod_1.z.string().min(8, "Пароль должен содержать минимум 8 символов"),
});
exports.RegisterSchemaResponse = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
