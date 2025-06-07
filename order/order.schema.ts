import { TypeOf, z } from "zod";
import { ORDER_STATUS } from "../enums/order-status.ts";
import { PAYMENT_METHOD } from "../enums/payment-method.ts";
import { AddressSchema } from "../address/address.schema.ts";

export const OrderSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(), 
    status: z.nativeEnum(ORDER_STATUS),
    total_price: z.number(),
    shipping_price: z.number(),
    payment_method: z.nativeEnum(PAYMENT_METHOD),
    payment_id: z.string().nullable(),
    address: AddressSchema.pick({
        city: true,
        street_address: true,
        phone_number: true
    }),
    created_at: z.date(),
    updated_at: z.date(),
})

export type Order = TypeOf<typeof OrderSchema>