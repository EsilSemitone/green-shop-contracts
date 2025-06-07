"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORY_ENUM = void 0;
exports.isProductCategory = isProductCategory;
exports.PRODUCT_CATEGORY_ENUM = {
    HOUSE_PLANTS: "HOUSE_PLANTS",
    POTTER_PLANTS: "POTTER_PLANTS",
    SEEDS: "SEEDS",
    SMALL_PLANTS: "SMALL_PLANTS",
    BIG_PLANTS: "BIG_PLANTS",
    SUCCULENTS: "SUCCULENTS",
    TRERRARIUMS: "TRERRARIUMS",
    GARDENING: "GARDENING",
    ACCESSORIES: "ACCESSORIES",
};
const PRODUCT_CATEGORY_ARR = Object.keys(exports.PRODUCT_CATEGORY_ENUM);
function isProductCategory(category) {
    return PRODUCT_CATEGORY_ARR.includes(category);
}
