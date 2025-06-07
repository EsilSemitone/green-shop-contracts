import { TypeOf, z } from "zod"

export const DeleteAddressRequestParamsSchema = z.object({
    addressUuid: z.string().uuid()
})

export const DeleteAddressResponseSchema = z.object({
    isSuccess: z.boolean()
})


export type DeleteAddressRequestParamsDto = TypeOf<typeof DeleteAddressRequestParamsSchema>
export type DeleteAddressResponseDto = TypeOf<typeof DeleteAddressResponseSchema>