"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagResponseSchema = exports.DeleteTagRequestParamsSchema = void 0;
const zod_1 = require("zod");
exports.DeleteTagRequestParamsSchema = zod_1.z.object({
    tagUuid: zod_1.z.string().uuid()
});
exports.DeleteTagResponseSchema = zod_1.z.object({
    isSuccess: zod_1.z.boolean()
});
