"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersResponseSchema = exports.GetAllUsersRequestQuerySchema = void 0;
const zod_1 = require("zod");
const order_by_users_ts_1 = require("../enums/order-by-users.js");
const user_schema_ts_1 = require("./user.schema.js");
exports.GetAllUsersRequestQuerySchema = zod_1.z.object({
    search: zod_1.z.string().max(30).optional(),
    isAdmin: zod_1.z.boolean().optional(),
    orderBy: zod_1.z.nativeEnum(order_by_users_ts_1.ORDER_BY_USERS_ENUM),
    limit: zod_1.z.coerce.number().positive(),
    offset: zod_1.z.coerce.number(),
});
exports.GetAllUsersResponseSchema = zod_1.z.object({
    users: user_schema_ts_1.UserSchema.pick({
        uuid: true,
        name: true,
        email: true
    }).array(),
    page: zod_1.z.string(),
    totalPage: zod_1.z.string()
});
