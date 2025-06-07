import { TypeOf, z } from "zod"
import { AddressSchema } from "./address.schema"


export const GetAllAddressesResponseSchema = z.object({
    addresses: AddressSchema.array()
})


export type GetAllAddressesResponseDto = TypeOf<typeof GetAllAddressesResponseSchema>