import { TypeOf } from "zod";
import { CartSchema } from "./cart-schema.js";

export const CreateCartResponseSchema = CartSchema;

export type CreateCartResponseDto = TypeOf<typeof CreateCartResponseSchema>;
