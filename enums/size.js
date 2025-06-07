"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIZE = void 0;
exports.isSize = isSize;
var SIZE;
(function (SIZE) {
    SIZE["SMALL"] = "SMALL";
    SIZE["MEDIUM"] = "MEDIUM";
    SIZE["LARGE"] = "LARGE";
})(SIZE || (exports.SIZE = SIZE = {}));
const SIZE_ARR = [
    SIZE.LARGE,
    SIZE.MEDIUM,
    SIZE.SMALL,
];
function isSize(size) {
    return SIZE_ARR.includes(size);
}
