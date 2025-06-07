"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadResponseSchema = exports.UploadRequestSchema = void 0;
const zod_1 = require("zod");
exports.UploadRequestSchema = zod_1.z.object({
    path: zod_1.z.string()
});
exports.UploadResponseSchema = zod_1.z.object({
    file: zod_1.z.string()
});
