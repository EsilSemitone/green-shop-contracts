import { z, TypeOf } from "zod";

export const DeleteProductRequestParamsSchema = z.object({
    uuid: z.string().uuid()
})
export const DeleteProductResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteProductRequestParamsDto = TypeOf<typeof DeleteProductRequestParamsSchema>
export type DeleteProductResponseDto = TypeOf<typeof DeleteProductResponseSchema>