export const ORDER_BY_PRODUCT_VARIANTS_ENUM = {
  FIRST_NEW: "first-new",
  FIRST_OLD: "first-old",
  FIRST_EXPENSIVE: "first-expensive",
  FIRST_CHEAP: "first-cheap",
} as const;

export type ORDER_BY_PRODUCT_VARIANTS =
  (typeof ORDER_BY_PRODUCT_VARIANTS_ENUM)[keyof typeof ORDER_BY_PRODUCT_VARIANTS_ENUM];

export const ORDER_BY_PRODUCT_VARIANTS_ARR = Object.values(ORDER_BY_PRODUCT_VARIANTS_ENUM)

export const isOrderByProductVariants = (arg: string): arg is ORDER_BY_PRODUCT_VARIANTS => {
  return (ORDER_BY_PRODUCT_VARIANTS_ARR as string[]).includes(arg!)
}