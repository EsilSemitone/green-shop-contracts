"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartItemsResponseSchema = void 0;
const cart_item_schema_js_1 = require("./cart-item-schema.js");
exports.GetCartItemsResponseSchema = cart_item_schema_js_1.CartItemSchema.array();
