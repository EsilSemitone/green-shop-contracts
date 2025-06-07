import { z } from "zod";
import { PRODUCT_CATEGORY_ENUM } from "../enums/product-category.js";

export const ProductSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    short_description: z.string(),
    description: z.string(),
    category: z.nativeEnum(PRODUCT_CATEGORY_ENUM),
    images: z.string().array(),
    created_at: z.date(),
    updated_at: z.date(),
})