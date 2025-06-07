import { TypeOf, z } from "zod";
import { AddressSchema } from "./address.schema.ts";

export const CreateAddressRequestSchema = AddressSchema.pick({
  city: true,
  street_address: true,
}).extend({
  phone_number: z.string().optional(),
});

export const CreateAddressResponseSchema = AddressSchema;

export type CreateAddressRequestDto = TypeOf<typeof CreateAddressRequestSchema>;
export type CreateAddressResponseDto = TypeOf<
  typeof CreateAddressResponseSchema
>;
