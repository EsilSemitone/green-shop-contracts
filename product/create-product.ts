import { TypeOf } from "zod";
import { ProductSchema } from "./product.schema.js";

export const CreateProductRequestSchema = ProductSchema.pick({
  name: true,
  short_description: true,
  description: true,
  category: true,
  images: true,
});

export const CreateProductResponseSchema = ProductSchema;

export type CreateProductRequestDto = TypeOf<typeof CreateProductRequestSchema>;
export type CreateProductResponseDto = TypeOf<
  typeof CreateProductResponseSchema
>;
