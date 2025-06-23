"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAdminResponseSchema = exports.UpdateUserAdminRequestSchema = exports.UpdateUserAdminRequestParamsSchema = void 0;
const zod_1 = require("zod");
const user_schema_ts_1 = require("./user.schema.js");
const get_user_ts_1 = require("./get-user.js");
exports.UpdateUserAdminRequestParamsSchema = zod_1.z.object({
    userUuid: zod_1.z.string().uuid()
});
exports.UpdateUserAdminRequestSchema = user_schema_ts_1.UserSchema.pick({
    name: true,
    email: true,
    phone_number: true,
    photo_image: true,
}).partial();
exports.UpdateUserAdminResponseSchema = get_user_ts_1.GetUserResponseSchema;
