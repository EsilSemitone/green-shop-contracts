"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncCartResponseSchema = exports.SyncCartRequestSchema = void 0;
const zod_1 = require("zod");
const cart_item_schema_js_1 = require("./cart-item-schema.js");
exports.SyncCartRequestSchema = zod_1.z.object({
    items: cart_item_schema_js_1.CartItemSchema.pick({
        product_variant_id: true,
        quantity: true,
    }).array()
});
exports.SyncCartResponseSchema = cart_item_schema_js_1.CartItemSchema.pick({
    uuid: true,
    product_variant_id: true,
    quantity: true
}).array();
