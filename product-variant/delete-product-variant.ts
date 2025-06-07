import { TypeOf, z } from "zod";

export const DeleteProductVariantRequestParamsSchema = z.object({
    productId: z.string().uuid(),
    uuid: z.string().uuid(),
})

export const DeleteProductVariantResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteProductVariantRequestParamsDto = TypeOf<typeof DeleteProductVariantRequestParamsSchema>
export type DeleteProductVariantResponseDto = TypeOf<typeof DeleteProductVariantResponseSchema>