import { TypeOf, z } from "zod";

export const DeleteTagRequestParamsSchema = z.object({
    tagUuid: z.string().uuid()
})

export const DeleteTagResponseSchema = z.object({
    isSuccess: z.boolean()
})

export type DeleteTagRequestParamsDto = TypeOf<typeof DeleteTagRequestParamsSchema>
export type DeleteTagResponseDto = TypeOf<typeof DeleteTagResponseSchema>