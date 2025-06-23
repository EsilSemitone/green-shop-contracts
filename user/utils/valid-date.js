"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateValidator = exports.isValidDDMMYYYY = void 0;
const zod_1 = require("zod");
const isValidDDMMYYYY = (date) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(date)) {
        return false;
    }
    return true;
};
exports.isValidDDMMYYYY = isValidDDMMYYYY;
exports.dateValidator = zod_1.z
    .string()
    .refine((date) => (0, exports.isValidDDMMYYYY)(date), {
    message: "Дата должна быть в формате 'DD.MM.YYYY'",
});
