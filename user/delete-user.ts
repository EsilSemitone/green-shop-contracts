import { z, TypeOf } from "zod";

export const DeleteUserResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteUserResponseDto = TypeOf<typeof DeleteUserResponseSchema>