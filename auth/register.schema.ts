import { z, TypeOf } from "zod";

export const RegisterSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email("email должен быть email"),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
})

export const RegisterSchemaResponse = z.object({
  accessToken: z.string(),
});

export type RegisterSchemaRequestDto = TypeOf<typeof RegisterSchemaRequest>;
export type RegisterSchemaResponseDto = TypeOf<typeof RegisterSchemaResponse>;
