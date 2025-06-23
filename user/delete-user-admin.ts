import { TypeOf, z } from "zod";

export const DeleteUserAdminRequestParamsSchema = z.object({
    userUuid: z.string().uuid()
})

export const DeleteUserAdminResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteUserAdminRequestParamsDto = TypeOf<typeof DeleteUserAdminRequestParamsSchema>
export type DeleteUserAdminResponseDto = TypeOf<typeof DeleteUserAdminResponseSchema>