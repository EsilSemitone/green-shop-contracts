import { z, TypeOf } from "zod";
import { UserSchema } from "../user/user.schema";

export const RestorePasswordSchemaRequest = UserSchema.pick({
    email: true,
})

export const RestorePasswordSchemaResponse = z.object({
    isSuccess: z.boolean()
})

export type RestorePasswordRequestDto =  TypeOf<typeof RestorePasswordSchemaRequest>
export type RestorePasswordResponseDto =  TypeOf<typeof RestorePasswordSchemaResponse>