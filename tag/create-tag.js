"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagResponseSchema = exports.CreateTagRequestSchema = void 0;
const tag_schema_ts_1 = require("./tag.schema.js");
exports.CreateTagRequestSchema = tag_schema_ts_1.TagSchema.pick({
    name: true
});
exports.CreateTagResponseSchema = tag_schema_ts_1.TagSchema;
