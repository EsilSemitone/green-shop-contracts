import { z, TypeOf } from "zod";
import { ProductSchema } from "../product/product.schema.js";
import {  PRODUCT_CATEGORY_ENUM } from "../enums/product-category.js";


export const GetSimilarProductVariantsRequestSchema = z.object({
  category: z.nativeEnum(PRODUCT_CATEGORY_ENUM).optional(),
  tags_id: z.string().uuid().array().optional(),

  limit: z.number().positive(),
});

export const GetSimilarProductVariantsResponseSchema = ProductSchema.pick({
  uuid: true,
  name: true,
})
  .extend({
    product_variant_id: z.string().uuid(),
    image: z.string().nullable(),
    price: z.string(),
  })
  .array()

export type GetSimilarProductVariantsRequestDto = TypeOf<
  typeof GetSimilarProductVariantsRequestSchema
>;

export type GetSimilarProductVariantsResponseDto = TypeOf<
  typeof GetSimilarProductVariantsResponseSchema
>;
