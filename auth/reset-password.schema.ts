import { z, TypeOf } from "zod";

export const ResetPasswordSchemaRequest = z.object({
  restore_code: z.string(),
  password: z.string().min(8),
})

export const ResetPasswordSchemaResponse = z.object({
  isSuccess: z.boolean(),
});

export type ResetPasswordRequestDto = TypeOf<typeof ResetPasswordSchemaRequest>;
export type ResetPasswordResponseDto = TypeOf<
  typeof ResetPasswordSchemaResponse
>;
