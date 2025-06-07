"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLikeRequestParamsSchema = void 0;
const zod_1 = require("zod");
const like_type_js_1 = require("../enums/like-type.js");
exports.DeleteLikeRequestParamsSchema = zod_1.z.object({
    targetId: zod_1.z.string().uuid(),
    targetType: zod_1.z.nativeEnum(like_type_js_1.LIKE_TYPE),
});
