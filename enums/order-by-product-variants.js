"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderByProductVariants = exports.ORDER_BY_PRODUCT_VARIANTS_ARR = exports.ORDER_BY_PRODUCT_VARIANTS_ENUM = void 0;
exports.ORDER_BY_PRODUCT_VARIANTS_ENUM = {
    FIRST_NEW: "first-new",
    FIRST_OLD: "first-old",
    FIRST_EXPENSIVE: "first-expensive",
    FIRST_CHEAP: "first-cheap",
};
exports.ORDER_BY_PRODUCT_VARIANTS_ARR = Object.values(exports.ORDER_BY_PRODUCT_VARIANTS_ENUM);
const isOrderByProductVariants = (arg) => {
    return exports.ORDER_BY_PRODUCT_VARIANTS_ARR.includes(arg);
};
exports.isOrderByProductVariants = isOrderByProductVariants;
