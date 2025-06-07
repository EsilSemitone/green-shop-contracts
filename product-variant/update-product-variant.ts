import { TypeOf, z } from "zod";
import { ProductVariantSchema } from "./product-variant.schema.ts";

export const UpdateProductVariantRequestSchema = ProductVariantSchema.pick({
  rating: true,
  price: true,
  size: true,
  stock: true,
}).partial()

export const UpdateProductVariantRequestParamsSchema = z.object({
  productId: z.string().uuid(),
  uuid: z.string().uuid(),
});

export const UpdateProductVariantResponseSchema = ProductVariantSchema;

export type UpdateProductVariantRequestDto = TypeOf<
  typeof UpdateProductVariantRequestSchema
>;
export type UpdateProductVariantRequestParamsDto = TypeOf<
  typeof UpdateProductVariantRequestParamsSchema
>;
export type UpdateProductVariantResponseDto = TypeOf<
  typeof UpdateProductVariantResponseSchema
>;
