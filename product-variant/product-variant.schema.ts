import { TypeOf, z } from "zod";
import { SIZE } from "../enums/size.ts";

export const ProductVariantSchema = z.object({
    uuid: z.string().uuid(),
    product_id: z.string().uuid(),
    rating: z.number(),
    price: z.number(),
    size: z.nativeEnum(SIZE),
    stock: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
})

export type ProductVariant = TypeOf<typeof ProductVariantSchema>