import { TypeOf, z } from "zod"
import { ProductSchema } from "./product.schema.ts"

export const GetAllProductsRequestQuerySchema = z.object({
    search: z.string().max(30).optional(),
    limit: z.coerce.number().positive(),
    offset: z.coerce.number(),
})

export const GetAllProductsResponseSchema = z.object({
    products: ProductSchema.array(),
    page: z.number(),
    totalPage: z.number()
})


export type GetAllProductsRequestQueryDto = TypeOf<typeof GetAllProductsRequestQuerySchema>
export type GetAllProductsResponseDto = TypeOf<typeof GetAllProductsResponseSchema>