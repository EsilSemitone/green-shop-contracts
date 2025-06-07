"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
const roles_ts_1 = require("../enums/roles.js");
exports.UserSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    role: zod_1.z.nativeEnum(roles_ts_1.ROLES),
    password: zod_1.z.string().min(8, "Пароль должен содержать минимум 8 символов"),
    phone_number: zod_1.z.string().nullable(),
    photo_image: zod_1.z.string().nullable(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
