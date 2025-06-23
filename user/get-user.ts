import { TypeOf, z } from "zod";
import { UserSchema } from "./user.schema.ts";

export const GetUserRequestParamsSchema = z.object({
    userUuid: z.string().uuid()
})

export const GetUserResponseSchema = UserSchema.pick({
    uuid: true,
    name: true,
    email: true,
    role: true,
    phone_number: true,
    photo_image: true,
    created_at:true,
    updated_at: true,
})

export type GetUserRequestParamsDto = TypeOf<typeof GetUserRequestParamsSchema>
export type GetUserResponseDto = TypeOf<typeof GetUserResponseSchema>