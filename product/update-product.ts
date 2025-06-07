import { TypeOf, z } from "zod";
import { ProductSchema } from "./product.schema.js";

export const UpdateProductRequestSchema = ProductSchema.pick({
    name: true,
    short_description: true,
    description: true,
    category: true,
    images: true
}).partial()

export const UpdateProductRequestParamsSchema = z.object({
    uuid: z.string().uuid()
})

export const UpdateProductResponseSchema = ProductSchema

export type UpdateProductRequestDto = TypeOf<typeof UpdateProductRequestSchema>
export type UpdateProductRequestParamsDto = TypeOf<typeof UpdateProductRequestParamsSchema>

export type UpdateProductResponseDto = TypeOf<typeof UpdateProductResponseSchema>