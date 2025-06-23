import { TypeOf, z } from "zod";
import { UserSchema } from "./user.schema.ts";
import { GetUserResponseSchema } from "./get-user.ts";

export const UpdateUserAdminRequestParamsSchema = z.object({
    userUuid: z.string().uuid()
})

export const UpdateUserAdminRequestSchema = UserSchema.pick({
    name: true,
    email: true,
    phone_number: true,
    photo_image: true,
}).partial()

export const UpdateUserAdminResponseSchema = GetUserResponseSchema;

export type UpdateUserAdminRequestParamsDto = TypeOf<typeof UpdateUserAdminRequestParamsSchema>
export type UpdateUserAdminRequestDto = TypeOf<typeof UpdateUserAdminRequestSchema>
export type UpdateUserAdminResponseDto= TypeOf<typeof UpdateUserAdminResponseSchema>