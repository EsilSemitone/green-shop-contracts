"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatsUsersResponseSchema = exports.GetStatsUsersRequestParamsDto = void 0;
const zod_1 = require("zod");
const stats_range_ts_1 = require("../enums/stats-range.js");
const valid_date_ts_1 = require("./utils/valid-date.js");
exports.GetStatsUsersRequestParamsDto = zod_1.z.object({
    range: zod_1.z.nativeEnum(stats_range_ts_1.STATS_RANGE),
    startDay: valid_date_ts_1.dateValidator,
    endDay: valid_date_ts_1.dateValidator,
}).refine(schema => {
    return new Date(schema.endDay).getTime() > new Date(schema.startDay).getTime();
}, { message: "Дата конца периода должна быть не раньше начала" });
exports.GetStatsUsersResponseSchema = zod_1.z.object({
    stats: zod_1.z.object({
        date: zod_1.z.string(),
        count: zod_1.z.number()
    }).array(),
    total: zod_1.z.number()
});
