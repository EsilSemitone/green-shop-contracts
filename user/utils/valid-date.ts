import { z } from 'zod';

export const isValidDDMMYYYY = (date: string): boolean => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(date)) {
        return false;
    }
    return true;
};

export const dateValidator = z
    .string()
    .refine((date) => isValidDDMMYYYY(date), {
        message: "Дата должна быть в формате 'DD.MM.YYYY'",
    });