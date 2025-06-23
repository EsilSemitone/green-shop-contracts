"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserResponseSchema = exports.GetUserRequestParamsSchema = void 0;
const zod_1 = require("zod");
const user_schema_ts_1 = require("./user.schema.js");
exports.GetUserRequestParamsSchema = zod_1.z.object({
    userUuid: zod_1.z.string().uuid()
});
exports.GetUserResponseSchema = user_schema_ts_1.UserSchema.pick({
    uuid: true,
    name: true,
    email: true,
    role: true,
    phone_number: true,
    photo_image: true,
    created_at: true,
    updated_at: true,
});
