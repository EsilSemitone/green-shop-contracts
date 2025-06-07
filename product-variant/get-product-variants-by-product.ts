import { TypeOf, z } from "zod";
import { ProductVariantSchema } from "./product-variant.schema.ts";
import { ProductSchema } from "../product/product.schema.ts";

export const GetProductVariantsByProductRequestParamsSchema = z.object({
    productId: z.string().uuid()
})

export const GetProductVariantsByProductResponseSchema = ProductSchema.extend({
    variants: ProductVariantSchema.extend({
        tags: z.string().array(),
        tags_id: z.string().array(),
    }).array()
})


export type GetProductVariantsByProductRequestParamsDto = TypeOf<typeof GetProductVariantsByProductRequestParamsSchema>
export type GetProductVariantsByProductResponseDto = TypeOf<typeof GetProductVariantsByProductResponseSchema>