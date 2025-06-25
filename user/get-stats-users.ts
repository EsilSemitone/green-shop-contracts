import { TypeOf, z } from "zod";
import { STATS_RANGE } from "../enums/stats-range.ts";

export const GetStatsUsersRequestParamsDto = z.object({
    range: z.nativeEnum(STATS_RANGE),
    startDay: z.string().date(),
    endDay: z.string().date(),
}).refine(schema => {
    return new Date(schema.endDay).getTime() > new Date(schema.startDay).getTime()
}, {message: "Дата конца периода должна быть не раньше начала"})

export const GetStatsUsersResponseSchema = z.object({
    stats: z.object({
        date: z.date(),
        count: z.number()
    }).array(),
    total: z.number()
})

export type GetStatsUsersRequestParamsDto = TypeOf<typeof GetStatsUsersRequestParamsDto>
export type GetStatsUsersResponseDto = TypeOf<typeof GetStatsUsersResponseSchema>
