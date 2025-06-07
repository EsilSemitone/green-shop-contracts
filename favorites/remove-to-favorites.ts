import { TypeOf, z } from "zod";

export const RemoveToFavoritesRequestSchema = z.object({
    product_variant_id: z.string().uuid()
})

export const RemoveToFavoritesResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type RemoveToFavoritesRequestDto = TypeOf<typeof RemoveToFavoritesRequestSchema>
export type RemoveToFavoritesResponseDto = TypeOf<typeof RemoveToFavoritesResponseSchema>