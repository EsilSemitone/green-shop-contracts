import { TypeOf, z } from "zod";

export const AddressSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(), 
    city: z.string().min(2, 'Горол должен состоять хотя бы из двух символов'),
    street_address: z.string().min(2, 'Адрес должен состоять хотя бы из двух символов'),
    phone_number: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
})

export type AddressSchemaType = TypeOf<typeof AddressSchema>
