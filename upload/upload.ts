import { z, TypeOf } from "zod";

export const UploadRequestSchema = z.object({
    path: z.string()
})

export const UploadResponseSchema = z.object({
    file: z.string()
})

export type UploadRequestDto = TypeOf<typeof UploadRequestSchema>
export type UploadResponseDto = TypeOf<typeof UploadResponseSchema>
