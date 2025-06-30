import { TypeOf, z } from "zod";
import { TagSchema } from "./tag.schema";

export const GetAllTagsResponseSchema = z.object({
    tags: TagSchema.array()
})

export type GetAllTagsResponseDto = TypeOf<typeof GetAllTagsResponseSchema>