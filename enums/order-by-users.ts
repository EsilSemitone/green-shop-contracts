export const ORDER_BY_USERS_ENUM = {
    FIRST_OLD: "first_old",
    FIRST_NEW: "first_new",
} as const;

export type ORDER_BY_USERS = (typeof ORDER_BY_USERS_ENUM)[keyof typeof ORDER_BY_USERS_ENUM]

export const ORDER_BY_USERS_ARR = Object.values(ORDER_BY_USERS_ENUM)

export const isOrderByUsers = (arg: string): arg is ORDER_BY_USERS => {
  return (ORDER_BY_USERS_ARR as string[]).includes(arg!)
}