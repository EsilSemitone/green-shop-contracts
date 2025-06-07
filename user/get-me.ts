import { z, TypeOf } from "zod";
import { UserSchema } from "./user.schema.js";


export const GetMeResponseSchema = UserSchema.pick({
    uuid: true,
    name: true,
    email: true,
    role: true,
    phone_number: true,
    photo_image: true,
    created_at: true,
    updated_at: true,
})

export type GetMeResponseDto = TypeOf<typeof GetMeResponseSchema>