"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartItemResponseSchema = exports.CreateCartItemRequestSchema = void 0;
const cart_item_schema_js_1 = require("./cart-item-schema.js");
exports.CreateCartItemRequestSchema = cart_item_schema_js_1.CartItemSchema.pick({
    product_variant_id: true,
    quantity: true,
});
exports.CreateCartItemResponseSchema = cart_item_schema_js_1.CartItemSchema;
