export const ORDER_BY_ORDERS_ENUM = {
    FIRST_NEW: 'first_new',
    FIRST_OLD: "first_old",
    FIRST_EXPENSIVE: "first-expensive",
    FIRST_CHEAP: "first-cheap",
} as const 

export type ORDER_BY_ORDERS =
  (typeof ORDER_BY_ORDERS_ENUM)[keyof typeof ORDER_BY_ORDERS_ENUM];

export const ORDER_BY_ORDERS_ARR = Object.values(ORDER_BY_ORDERS_ENUM)

export const isOrderByOrders= (arg: string): arg is ORDER_BY_ORDERS => {
  return (ORDER_BY_ORDERS_ARR as string[]).includes(arg!)
}