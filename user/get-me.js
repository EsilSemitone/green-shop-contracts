"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeResponseSchema = void 0;
const user_schema_js_1 = require("./user.schema.js");
exports.GetMeResponseSchema = user_schema_js_1.UserSchema.pick({
    uuid: true,
    name: true,
    email: true,
    role: true,
    phone_number: true,
    photo_image: true,
    created_at: true,
    updated_at: true,
});
