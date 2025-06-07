import { TypeOf, z } from "zod";

export const GetAllFavoritesResponseSchema = z.object({
    payload: z.object({
        price: z.number(),
        product_variant_id: z.string().uuid(),
        uuid: z.string().uuid(),
        name: z.string(),
        image: z.string().nullable()
   }).array()})

export type GetAllFavoritesResponseDto = TypeOf<typeof GetAllFavoritesResponseSchema>