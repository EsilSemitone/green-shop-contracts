import { z } from "zod";
import { LIKE_TYPE } from "../enums/like-type.js";

export const LikeSchema = z.object({
    uuid: z.string().uuid(),
    user_id: z.string().uuid(),
    target_id: z.string().uuid(),
    target_type: z.nativeEnum(LIKE_TYPE),
    created_at: z.date(),
    updated_at: z.date(),
})