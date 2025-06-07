import { z, TypeOf } from "zod";
import {  PRODUCT_CATEGORY_ENUM } from "../enums/product-category.js";
import { SIZE } from "../enums/size.js";


export const GetProductFilterResponseSchema = z.object({
    categories: z.array(z.object({
        category: z.nativeEnum(PRODUCT_CATEGORY_ENUM),
        count: z.number()
    })),
    sizes: z.array(z.object({
        size: z.nativeEnum(SIZE),
        count: z.number()
    })),
    prices: z.object({
        min: z.number(),
        max: z.number(),
    })
})

export type GetProductFilterResponseDto = TypeOf<typeof GetProductFilterResponseSchema>
