"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestorePasswordSchemaResponse = exports.RestorePasswordSchemaRequest = void 0;
const zod_1 = require("zod");
const user_schema_1 = require("../user/user.schema");
exports.RestorePasswordSchemaRequest = user_schema_1.UserSchema.pick({
    email: true,
});
exports.RestorePasswordSchemaResponse = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
