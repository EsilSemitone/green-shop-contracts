export const ORDER_BY_REVIEWS_ENUM = {
  FIRST_NEW: "first-new",
  FIRST_OLD: "first-old",
  FIRST_POPULAR: "first-popular",
} as const;

export type ORDER_BY_REVIEWS =
  (typeof ORDER_BY_REVIEWS_ENUM)[keyof typeof ORDER_BY_REVIEWS_ENUM];

export const ORDER_BY_REVIEWS_ARR = Object.values(ORDER_BY_REVIEWS_ENUM)

export const isOrderByReviews = (arg: string): arg is ORDER_BY_REVIEWS => {
  return (ORDER_BY_REVIEWS_ARR as string[]).includes(arg!)
}