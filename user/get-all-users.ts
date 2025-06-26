import { TypeOf, z } from "zod";
import { ORDER_BY_USERS_ENUM } from "../enums/order-by-users.ts";
import { UserSchema } from "./user.schema.ts";

export const GetAllUsersRequestQuerySchema = z.object({
    search: z.string().max(30).optional(),
    isAdmin:  z.string().transform(arg => {
        return arg === 'true' ? true : false
    }),
    orderBy: z.nativeEnum(ORDER_BY_USERS_ENUM),
    limit: z.coerce.number().positive(),
    offset: z.coerce.number(),
})

export const GetAllUsersResponseSchema = z.object({
    users: UserSchema.pick({
        uuid: true,
        name: true,
        email: true,
        photo_image: true
    }).array(),
    page: z.number(),
    totalPage: z.number()
})

export type GetAllUsersRequestQueryDto = TypeOf<typeof GetAllUsersRequestQuerySchema>
export type GetAllUsersResponseDto = TypeOf<typeof GetAllUsersResponseSchema>