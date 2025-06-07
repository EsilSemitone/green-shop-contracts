import { z } from "zod";
import { ROLES } from "../enums/roles.ts";

export const UserSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  role: z.nativeEnum(ROLES),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
  phone_number: z.string().nullable(),
  photo_image: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});
