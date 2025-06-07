import { TypeOf, z } from "zod";
import { ProductVariantSchema } from "./product-variant.schema.ts";

export const CreateProductVariantRequestSchema = ProductVariantSchema.pick({
    rating: true,
    price: true,
    size: true,
    stock: true,
})

export const CreateProductVariantRequestParamsSchema = z.object({
    productId: z.string().uuid()
})

export const CreateProductVariantResponseSchema = ProductVariantSchema


export type CreateProductVariantRequestDto = TypeOf<typeof CreateProductVariantRequestSchema>
export type CreateProductVariantRequestParamsDto = TypeOf<typeof CreateProductVariantRequestParamsSchema>
export type CreateProductVariantResponseDto = TypeOf<typeof CreateProductVariantResponseSchema>