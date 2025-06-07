import { TypeOf, z } from "zod";
import { PaymentMethodSchema } from "./payment-method.schema.ts";

export const GetPaymentMethodsResponseSchema = z.object({
    methods: PaymentMethodSchema.array()
})

export type GetPaymentMethodsResponseDto = TypeOf<typeof GetPaymentMethodsResponseSchema>