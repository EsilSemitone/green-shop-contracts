import { TypeOf, z } from "zod"
import { AddressSchema } from "./address.schema.js"

export const UpdateAddressRequestParamsSchema = z.object({
    addressUuid: z.string().uuid()
})

export const UpdateAddressRequestSchema = AddressSchema.pick({
    city: true,
    street_address: true,
    phone_number: true
}).partial()

export const UpdateAddressResponseSchema = AddressSchema


export type UpdateAddressRequestParamsDto = TypeOf<typeof UpdateAddressRequestParamsSchema>

export type UpdateAddressRequestDto = TypeOf<typeof UpdateAddressRequestSchema>
export type UpdateAddressResponseDto = TypeOf<typeof UpdateAddressResponseSchema>