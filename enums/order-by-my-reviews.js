"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderByReviews = exports.ORDER_BY_REVIEWS_ARR = exports.ORDER_BY_REVIEWS_ENUM = void 0;
exports.ORDER_BY_REVIEWS_ENUM = {
    FIRST_NEW: "first-new",
    FIRST_OLD: "first-old",
    FIRST_POPULAR: "first-popular",
};
exports.ORDER_BY_REVIEWS_ARR = Object.values(exports.ORDER_BY_REVIEWS_ENUM);
const isOrderByReviews = (arg) => {
    return exports.ORDER_BY_REVIEWS_ARR.includes(arg);
};
exports.isOrderByReviews = isOrderByReviews;
