import { TypeOf } from "zod";
import { TagSchema } from "./tag.schema.ts";

export const CreateTagRequestSchema = TagSchema.pick({
    name: true
})

export const CreateTagResponseSchema = TagSchema

export type CreateTagRequestDto = TypeOf<typeof CreateTagRequestSchema>
export type CreateTagResponseDto = TypeOf<typeof CreateTagResponseSchema>