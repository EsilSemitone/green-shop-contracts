"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const zod_1 = require("zod");
exports.CartSchema = zod_1.z.object({
    uuid: zod_1.z.string().uuid(),
    user_id: zod_1.z.string().uuid(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
