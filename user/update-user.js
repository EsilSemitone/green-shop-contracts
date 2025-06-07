"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserResponseSchema = exports.UpdateUserRequestSchema = void 0;
const user_schema_ts_1 = require("./user.schema.js");
exports.UpdateUserRequestSchema = user_schema_ts_1.UserSchema.pick({
    name: true,
    email: true,
    password: true,
    phone_number: true,
    photo_image: true,
}).partial();
exports.UpdateUserResponseSchema = user_schema_ts_1.UserSchema.pick({
    uuid: true,
    name: true,
    email: true,
    role: true,
    phone_number: true,
    photo_image: true,
    created_at: true,
    updated_at: true,
});
