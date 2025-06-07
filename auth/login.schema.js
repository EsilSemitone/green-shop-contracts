"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchemaResponse = exports.LoginSchemaRequest = void 0;
const zod_1 = require("zod");
const user_schema_ts_1 = require("../user/user.schema.js");
// import { UserSchema } from "../user/user.schema.js";
exports.LoginSchemaRequest = user_schema_ts_1.UserSchema.pick({
    email: true,
    password: true,
});
exports.LoginSchemaResponse = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
