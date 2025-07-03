import { z, TypeOf } from "zod";
import { ProductSchema } from "../product/product.schema.js";
import {  PRODUCT_CATEGORY_ENUM } from "../enums/product-category.js";
import { SIZE } from "../enums/size.js";
import { ORDER_BY_PRODUCT_VARIANTS_ENUM } from "../enums/order-by-product-variants.js";

export const GetProductVariantsByCriteriaRequestParamsSchema = z.object({
  productId: z.string().uuid(),
});

export const GetProductVariantsByCriteriaRequestQuerySchema = z.object({
  category: z.nativeEnum(PRODUCT_CATEGORY_ENUM).optional(),
  size: z.nativeEnum(SIZE).optional(),
  priceFrom: z.coerce.number().optional(),
  priceTo: z.coerce.number().optional(),
  search: z.string().optional(),
  limit: z.coerce.number().positive(),
  offset: z.coerce.number(),
  orderBy: z.nativeEnum(ORDER_BY_PRODUCT_VARIANTS_ENUM)
});

export const GetProductVariantsByCriteriaResponseSchema = z.object({
  products: ProductSchema.pick({
    uuid: true,
    name: true,
  })
    .extend({
      product_variant_id: z.string().uuid(),
      image: z.string().nullable(),
      price: z.number(),
    })
    .array(),
  page: z.number(),
  totalPage: z.number(),
});

export type GetProductVariantsByCriteriaRequestParamsDto = TypeOf<
  typeof GetProductVariantsByCriteriaRequestParamsSchema
>;
export type GetProductVariantsByCriteriaRequestQueryDto = TypeOf<
  typeof GetProductVariantsByCriteriaRequestQuerySchema
>;

export type GetProductVariantsByCriteriaResponseDto = TypeOf<
  typeof GetProductVariantsByCriteriaResponseSchema
>;
