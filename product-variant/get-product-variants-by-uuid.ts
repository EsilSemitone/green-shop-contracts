import { z, TypeOf } from "zod";
import { ProductSchema } from "../product/product.schema.js";

export const GetProductVariantByUuidRequestParamsSchema = z.object({
  uuid: z.string().uuid(),
});

export const GetProductVariantByUuidResponseSchema = ProductSchema.pick({
  uuid: true,
  name: true,
}).extend({
  product_variant_id: z.string().uuid(),
  image: z.string().nullable(),
  price: z.number(),
  tags_id: z.string().array()
});

export type GetProductVariantByUuidRequestParamsDto = TypeOf<
  typeof GetProductVariantByUuidRequestParamsSchema
>;

export type GetProductVariantByUuidResponseDto = TypeOf<
  typeof GetProductVariantByUuidResponseSchema
>;
