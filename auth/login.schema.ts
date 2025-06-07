import { z, TypeOf } from "zod";
import { UserSchema } from "../user/user.schema.ts";
// import { UserSchema } from "../user/user.schema.js";

export const LoginSchemaRequest = UserSchema.pick({
  email: true,
  password: true,
});

export const LoginSchemaResponse = z.object({
  accessToken: z.string(),
});

export type LoginSchemaRequestDto = TypeOf<typeof LoginSchemaRequest>;
export type LoginSchemaResponseDto = TypeOf<typeof LoginSchemaResponse>;
