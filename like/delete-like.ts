
import { TypeOf, z } from "zod";
import { LIKE_TYPE } from "../enums/like-type.js";

export const DeleteLikeRequestParamsSchema = z.object({
    targetId: z.string().uuid(),
    targetType: z.nativeEnum(LIKE_TYPE),
})

export type DeleteLikeRequestParamsDto = TypeOf<typeof DeleteLikeRequestParamsSchema>