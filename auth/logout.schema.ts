import { z, TypeOf } from "zod";

export const LogoutSchemaResponse = z.object({
    isSuccess: z.boolean(),
  });

export type LogoutResponseDto =  TypeOf<typeof LogoutSchemaResponse>