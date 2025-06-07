import { z, TypeOf } from "zod";
import { ProductSchema } from "./product.schema.js";

export const GetProductByUuidRequestParamsSchema = z.object({
    uuid: z.string().uuid()
})
export const GetProductByUuidResponseSchema = ProductSchema

export type GetProductByUuidRequestParamsDto = TypeOf<typeof GetProductByUuidRequestParamsSchema>
export type GetProductByUuidResponseDto = TypeOf<typeof GetProductByUuidResponseSchema>