"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshSchemaResponse = void 0;
const zod_1 = require("zod");
exports.RefreshSchemaResponse = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
