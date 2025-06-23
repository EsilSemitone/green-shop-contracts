import { TypeOf, z } from "zod";
import { STATS_RANGE } from "../enums/stats-range.ts";
import { dateValidator } from "./utils/valid-date.ts";

export const GetStatsUsersRequestParamsDto = z.object({
    range: z.nativeEnum(STATS_RANGE),
    startDay: dateValidator,
    endDay: dateValidator,
}).refine(schema => {
    return new Date(schema.endDay).getTime() > new Date(schema.startDay).getTime()
}, {message: "Дата конца периода должна быть не раньше начала"})

export const GetStatsUsersResponseSchema = z.object({
    stats: z.object({
        date: z.string(),
        count: z.number()
    }).array(),
    total: z.number()
})

export type GetStatsUsersRequestParamsDto = TypeOf<typeof GetStatsUsersRequestParamsDto>
export type GetStatsUsersResponseDto = TypeOf<typeof GetStatsUsersResponseSchema>
