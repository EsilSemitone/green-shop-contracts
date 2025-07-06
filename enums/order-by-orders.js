"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderByOrders = exports.ORDER_BY_ORDERS_ARR = exports.ORDER_BY_ORDERS_ENUM = void 0;
exports.ORDER_BY_ORDERS_ENUM = {
    FIRST_NEW: 'first_new',
    FIRST_OLD: "first_old",
    FIRST_EXPENSIVE: "first-expensive",
    FIRST_CHEAP: "first-cheap",
};
exports.ORDER_BY_ORDERS_ARR = Object.values(exports.ORDER_BY_ORDERS_ENUM);
const isOrderByOrders = (arg) => {
    return exports.ORDER_BY_ORDERS_ARR.includes(arg);
};
exports.isOrderByOrders = isOrderByOrders;
