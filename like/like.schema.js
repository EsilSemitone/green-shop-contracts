"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeSchema = void 0;
const zod_1 = require("zod");
const like_type_js_1 = require("../enums/like-type.js");
exports.LikeSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    target_id: zod_1.z.string().uuid(),
    target_type: zod_1.z.nativeEnum(like_type_js_1.LIKE_TYPE),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
