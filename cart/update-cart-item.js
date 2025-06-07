"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartItemResponseSchema = exports.UpdateCartItemRequestSchema = exports.UpdateCartItemRequestParamSchema = void 0;
const zod_1 = require("zod");
const cart_item_schema_js_1 = require("./cart-item-schema.js");
exports.UpdateCartItemRequestParamSchema = zod_1.z.object({
    cartItemUuid: zod_1.z.string().uuid(),
});
exports.UpdateCartItemRequestSchema = cart_item_schema_js_1.CartItemSchema.pick({
    quantity: true,
});
exports.UpdateCartItemResponseSchema = cart_item_schema_js_1.CartItemSchema;
