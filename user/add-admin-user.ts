import { TypeOf, z } from "zod";

export const AddAdminUserRequestSchema = z.object({
    email: z.string().email(),
})

export const AddAdminUserResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type AddAdminUserRequestDto = TypeOf<typeof AddAdminUserRequestSchema>
export type AddAdminUserResponseDto = TypeOf<typeof AddAdminUserResponseSchema>