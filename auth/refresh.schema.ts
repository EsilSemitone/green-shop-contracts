import { z, TypeOf } from "zod";

export const RefreshSchemaResponse = z.object({
  accessToken: z.string(),
});

export type RefreshResponseDto = TypeOf<typeof RefreshSchemaResponse>;
