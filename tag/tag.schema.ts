import { TypeOf, z } from "zod";

export const TagSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
})

export type Tag = TypeOf<typeof TagSchema>