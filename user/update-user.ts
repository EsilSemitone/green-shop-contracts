import { z, TypeOf } from "zod";
import { UserSchema } from "./user.schema.ts";

export const UpdateUserRequestSchema = UserSchema.pick({
  name: true,
  email: true,
  password: true,
  phone_number: true,
  photo_image: true,
}).partial();

export const UpdateUserResponseSchema = UserSchema.pick({
  uuid: true,
  name: true,
  email: true,
  role: true,
  phone_number: true,
  photo_image: true,
  created_at: true,
  updated_at: true,
});

export type UpdateUserRequestDto = TypeOf<typeof UpdateUserRequestSchema>;
export type UpdateUserResponseDto = TypeOf<typeof UpdateUserResponseSchema>;
