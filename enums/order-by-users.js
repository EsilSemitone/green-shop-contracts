"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderByUsers = exports.ORDER_BY_USERS_ARR = exports.ORDER_BY_USERS_ENUM = void 0;
exports.ORDER_BY_USERS_ENUM = {
    FIRST_OLD: "first_old",
    FIRST_NEW: "first_new",
};
exports.ORDER_BY_USERS_ARR = Object.values(exports.ORDER_BY_USERS_ENUM);
const isOrderByUsers = (arg) => {
    return exports.ORDER_BY_USERS_ARR.includes(arg);
};
exports.isOrderByUsers = isOrderByUsers;
