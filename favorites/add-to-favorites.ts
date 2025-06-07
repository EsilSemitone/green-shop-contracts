import { TypeOf, z } from "zod";

export const AddToFavoritesRequestSchema = z.object({
    product_variant_id: z.string().uuid()
})

export const AddToFavoritesResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type AddToFavoritesRequestDto = TypeOf<typeof AddToFavoritesRequestSchema>
export type AddToFavoritesResponseDto = TypeOf<typeof AddToFavoritesResponseSchema>