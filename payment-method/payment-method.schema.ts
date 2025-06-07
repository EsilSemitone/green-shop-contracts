import { TypeOf, z } from "zod";

export const PaymentMethodSchema = z.object({
    uuid: z.string(),
    price: z.number(),
    name: z.string(),
    description: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
})

export type PaymentMethod = TypeOf<typeof PaymentMethodSchema>