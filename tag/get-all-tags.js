"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTagsResponseSchema = void 0;
const zod_1 = require("zod");
const tag_schema_1 = require("./tag.schema");
exports.GetAllTagsResponseSchema = zod_1.z.object({
    tags: tag_schema_1.TagSchema.array()
});
